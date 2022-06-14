import { createClient } from '@supabase/supabase-js';

const supabaseKey  = process.env.SUPABASE_KEY;
const SUPABASE_URL = 'https://wahqtsloevonfprobroq.supabase.co';
export const supabaseClient = createClient(SUPABASE_URL, supabaseKey );