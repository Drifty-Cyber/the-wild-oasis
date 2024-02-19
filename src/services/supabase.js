import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://olwktgdfyswnxxeztnpq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sd2t0Z2RmeXN3bnh4ZXp0bnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyOTE3MzYsImV4cCI6MjAyMzg2NzczNn0.kKCX90mXGynbEKDkwgdJViZiJiiCj2DMDRbYM3TdBOA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
