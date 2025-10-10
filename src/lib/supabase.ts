import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseClientKey = process.env.SUPABASE_CLIENT_KEY

if (!supabaseUrl || !supabaseClientKey) {
  throw new Error('Missing enviorment variables!!')
}

export const supabase = createClient(supabaseUrl, supabaseClientKey)