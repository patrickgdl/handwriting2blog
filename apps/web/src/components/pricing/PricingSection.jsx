import { useRouter } from "next/router";
import { useState } from "react";
import { ButtonAlt } from "ui";
import { cn } from "utils";

import { getStripe } from "../lib/stripe/stripe-client";
import { postData } from "../lib/utils/helpers";
import { useUser } from "../lib/utils/useUser";

export function PricingSection({ products }) {
  const router = useRouter();

  const { user, isLoading, subscription } = useUser();
  const [priceIdLoading, setPriceIdLoading] = useState();
  const [billingInterval, setBillingInterval] = useState("month");

  const handleCheckout = async (price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      return router.push("/signin");
    }

    if (subscription) {
      return router.push("/account");
    }

    try {
      const { sessionId } = await postData({
        url: "/api/create-checkout-session",
        data: { price },
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert(error?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  if (!products.length)
    return (
      <section className="mx-auto max-w-6xl py-8 px-4 font-display sm:py-24 sm:px-6 lg:px-8">
        <p className="text-2xl font-bold text-slate-800 sm:text-center">
          Nenhum plano de assinatura encontrado. Crie-os no{" "}
          <a
            className="text-violet-500 underline"
            href="https://dashboard.stripe.com/products"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dashboard Stripe
          </a>
          .
        </p>
      </section>
    );

  return (
    <section className="mx-auto max-w-6xl py-8 px-4 font-display sm:py-24 sm:px-6 lg:px-8">
      <div className="sm:align-center sm:flex sm:flex-col">
        <h1 className="text-4xl font-bold text-slate-800 sm:text-center">
          Planos de Preços
        </h1>

        <p className="m-auto mt-5 max-w-2xl text-center text-xl text-slate-600">
          Comece a criar gratuitamente e adicione um plano de site para entrar
          no ar. Conta planos desbloqueiam recursos adicionais.
        </p>

        <div className="relative mt-6 flex self-center rounded-lg border border-zinc-800 bg-zinc-900 p-0.5 sm:mt-8">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 border-zinc-800 bg-white text-slate-800 shadow-sm"
                : "relative ml-0.5 w-1/2 border border-transparent text-zinc-400"
            } m-1 whitespace-nowrap rounded-md py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 sm:w-auto sm:px-8`}
          >
            Cobrança mensal
          </button>

          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={`${
              billingInterval === "year"
                ? "relative w-1/2 border-zinc-800 bg-white text-slate-800 shadow-sm"
                : "relative ml-0.5 w-1/2 border border-transparent text-zinc-400"
            } m-1 whitespace-nowrap rounded-md py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 sm:w-auto sm:px-8`}
          >
            Cobrança anual
          </button>
        </div>
      </div>

      <div className="mt-12 grid-cols-2 space-y-4 sm:mt-16 sm:grid sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none">
        {products.map((product) => {
          const price = product?.prices?.find(
            (price) => price.interval === billingInterval
          );
          if (!price) return null;

          const priceString = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: price.currency,
            minimumFractionDigits: 0,
          }).format((price?.unit_amount || 0) / 100);

          return (
            <div
              key={product.id}
              className={cn(
                "divide-y divide-zinc-600 rounded-lg bg-zinc-100 shadow-sm",
                {
                  "border border-violet-500": subscription
                    ? product.name === subscription?.prices?.products?.name
                    : product.name === "Freelancer",
                }
              )}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-6 text-slate-800">
                  {product.name}
                </h2>

                <p className="mt-4 text-slate-600">{product.description}</p>

                <p className="mt-8">
                  <span className="white text-5xl font-extrabold">
                    {priceString}
                  </span>
                  <span className="text-base font-medium text-slate-600">
                    /{billingInterval === "month" ? "mês" : "ano"}
                  </span>
                </p>

                <ButtonAlt
                  variant="slim"
                  type="button"
                  disabled={isLoading}
                  loading={priceIdLoading === price.id}
                  onClick={() => handleCheckout(price)}
                  className="mt-8 block w-full rounded-md py-2 text-center text-sm font-semibold text-slate-800 hover:bg-zinc-900"
                >
                  {product.name === subscription?.prices?.products?.name
                    ? "Gerenciar"
                    : "Se inscrever"}
                </ButtonAlt>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
