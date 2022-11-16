import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which we must only use in a secure server-side context
// as it has admin priviliges and overwrites RLS policies!
export default createClient(supabaseUrl, supabaseKey || "");
