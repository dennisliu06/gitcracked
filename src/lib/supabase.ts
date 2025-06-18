import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseClientKey = process.env.NEXT_PUBLIC_SUPABASE_CLIENT_KEY

if (!supabaseUrl || !supabaseClientKey) {
  throw new Error('Missing enviorment variables!!')
}

export const supabase = createClient(supabaseUrl, supabaseClientKey)