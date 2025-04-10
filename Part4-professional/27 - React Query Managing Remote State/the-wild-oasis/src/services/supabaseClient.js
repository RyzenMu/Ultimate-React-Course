
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://fpfkqstfkcewfgluidkv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZmtxc3Rma2Nld2ZnbHVpZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2ODk4ODcsImV4cCI6MjA1OTI2NTg4N30.1pl6ZqjUxBHGVxIgRDX_OC8dvm3rs1htIW1jC0YQPHw';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;