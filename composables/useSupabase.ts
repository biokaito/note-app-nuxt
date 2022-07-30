import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrbdyxkqddwgfbztxxdy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yYmR5eGtxZGR3Z2ZienR4eGR5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1OTE3OTU4MSwiZXhwIjoxOTc0NzU1NTgxfQ.TGv3vql0w5fXt7VqCqCyDZsxGCrDYy0C2U7mIvTFD14";

const useSupabase = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);

  return {
    supabase
  }
};

export default useSupabase;
