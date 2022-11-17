import { stripe } from "../stripe/stripe";
import { toDateTime } from "../utils/helpers";

import supabase from "./supabase";

export const upsertProductRecord = async (product) => {
  const productData = {
    id: product.id,
    active: product.active,
    name: product.name,
    description: product.description ?? undefined,
    image: product.images?.[0] ?? null,
    metadata: product.metadata,
  };

  const { error } = await supabase.from("products").upsert([productData]);

  if (error) throw error;

  console.log(`Produto inserido/atualizado: ${product.id}`);
};

export const upsertPriceRecord = async (price) => {
  const priceData = {
    id: price.id,
    product_id: typeof price.product === "string" ? price.product : "",
    active: price.active,
    currency: price.currency,
    description: price.nickname ?? undefined,
    type: price.type,
    unit_amount: price.unit_amount ?? undefined,
    interval: price.recurring?.interval,
    interval_count: price.recurring?.interval_count,
    trial_period_days: price.recurring?.trial_period_days,
    metadata: price.metadata,
  };

  const { error } = await supabase.from("prices").upsert([priceData]);

  if (error) throw error;

  console.log(`Preço inserido/atualizado: ${price.id}`);
};

export const createOrRetrieveCustomer = async ({ email, uuid }) => {
  const { data, error } = await supabase
    .from("customers")
    .select("stripe_customer_id")
    .eq("id", uuid)
    .single();

  if (error || !data?.stripe_customer_id) {
    // No customer record found, let's create one.
    const customerData = {
      metadata: {
        supabaseUUID: uuid,
      },
    };

    if (email) customerData.email = email;

    const customer = await stripe.customers.create(customerData);

    // Now insert the customer ID into our Supabase mapping table.
    const { error: supabaseError } = await supabase
      .from("customers")
      .insert([{ id: uuid, stripe_customer_id: customer.id }]);

    if (supabaseError) throw supabaseError;

    console.log(`Novo cliente criado e inserido para ${uuid}.`);

    return customer.id;
  }
  return data.stripe_customer_id;
};

/**
 * Copies the billing details from the payment method to the customer object (Stripe and Supabase).
 */
export const copyBillingDetailsToCustomer = async (uuid, payment_method) => {
  //Todo: check this assertion
  const customer = payment_method.customer;

  const { name, phone, address } = payment_method.billing_details;

  if (!name || !phone || !address) return;

  await stripe.customers.update(customer, { name, phone, address });

  const { error } = await supabase
    .from("users")
    .update({
      billing_address: { ...address },
      payment_method: { ...payment_method[payment_method.type] },
    })
    .eq("id", uuid);

  if (error) throw error;
};

export const manageSubscriptionStatusChange = async (
  subscriptionId,
  customerId,
  createAction = false
) => {
  // Get customer's UUID from mapping table.
  const { data: customerData, error: noCustomerError } = await supabase
    .from("customers")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .single();

  if (noCustomerError) throw noCustomerError;

  const { id: uuid } = customerData;

  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ["default_payment_method"],
  });

  // Upsert the latest status of the subscription object.
  const subscriptionData = {
    id: subscription.id,
    user_id: uuid,
    metadata: subscription.metadata,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
    quantity: subscription?.quantity ?? subscription.items.data[0].quantity,
    cancel_at_period_end: subscription.cancel_at_period_end,
    cancel_at: subscription.cancel_at
      ? toDateTime(subscription.cancel_at).toISOString()
      : null,
    canceled_at: subscription.canceled_at
      ? toDateTime(subscription.canceled_at).toISOString()
      : null,
    current_period_start: toDateTime(
      subscription.current_period_start
    ).toISOString(),
    current_period_end: toDateTime(
      subscription.current_period_end
    ).toISOString(),
    created: toDateTime(subscription.created).toISOString(),
    ended_at: subscription.ended_at
      ? toDateTime(subscription.ended_at).toISOString()
      : null,
    trial_start: subscription.trial_start
      ? toDateTime(subscription.trial_start).toISOString()
      : null,
    trial_end: subscription.trial_end
      ? toDateTime(subscription.trial_end).toISOString()
      : null,
  };

  const { error } = await supabase
    .from("subscriptions")
    .upsert([subscriptionData]);

  if (error) throw error;

  console.log(
    `Assinatura inserida/atualizada [${subscription.id}] para usuário [${uuid}]`
  );

  // For a new subscription copy the billing details to the customer object.
  // NOTE: This is a costly operation and should happen at the very end.
  if (createAction && subscription.default_payment_method && uuid)
    await copyBillingDetailsToCustomer(
      uuid,
      subscription.default_payment_method
    );
};
