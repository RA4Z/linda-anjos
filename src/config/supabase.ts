import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eljilalbzabmkahtvfkv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsamlsYWxiemFibWthaHR2Zmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MjE1NDIsImV4cCI6MjAyODA5NzU0Mn0.xTIp3ClXqMbxFW98iHq_AxIzpz1Eq0YqiCyCPi_rZZQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }