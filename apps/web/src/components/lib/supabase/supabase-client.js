import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createBrowserSupabaseClient();

export const getActiveProductsWithPrices = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*, prices(*)")
    .eq("active", true)
    .eq("prices.active", true)
    .order("metadata->index")
    .order("unit_amount", { foreignTable: "prices" });

  if (error) {
    console.log(error.message);
    throw error;
  }
  // TODO: improve the typing here.
  return data || [];
};

export const updateUserName = async (user, name) => {
  await supabase
    .from("users")
    .update({
      full_name: name,
    })
    .eq("id", user.id);
};
