import { withApiAuth } from "@supabase/auth-helpers-nextjs";

import { getURL } from "../../components/lib/utils/helpers";
import { stripe } from "../../components/lib/stripe/stripe";
import { createOrRetrieveCustomer } from "../../components/lib/supabase/supabase-admin";

export default withApiAuth(async function createCheckoutSession(
  req,
  res,
  supabaseServerClient
) {
  if (req.method === "POST") {
    try {
      const {
        data: { user },
      } = await supabaseServerClient.auth.getUser();

      if (!user) throw Error("Não foi possível obter o usuário");

      const customer = await createOrRetrieveCustomer({
        uuid: user.id || "",
        email: user.email || "",
      });

      if (!customer) throw Error("Não foi possível obter o cliente");

      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${getURL()}/account`,
      });

      return res.status(200).json({ url });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
});
