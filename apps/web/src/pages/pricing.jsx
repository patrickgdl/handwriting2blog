import { PricingSection } from "../components/pricing/PricingSection";
import { getActiveProductsWithPrices } from "../components/lib/supabase/supabase-client";

import Layout from "../components/layout";

export default function Pricing({ products }) {
  return (
    <Layout>
      <PricingSection products={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}
