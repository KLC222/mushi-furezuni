import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const SUPABASE_URL = 'https://ttekijjmlvphafdjqlsc.supabase.co' // 'http://127.0.0.1:54321'
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0ZWtpamptbHZwaGFmZGpxbHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0ODIxOTUsImV4cCI6MjA0OTA1ODE5NX0.jl3cAzTF4n7mYHc1S0zsDkcgWewvJ2OjOeCWZYAJXrw"

// Connect to Supabase DB
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);


// hello world sample

async function testSupabase(){
    const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { name: 'Kana' },
      })
      console.log(data, error)
      
}
window.testSupabase = testSupabase;