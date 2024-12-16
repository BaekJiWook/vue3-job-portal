// supabase에 접속하는 함수
import { createClient } from '@supabase/supabase-js'

// 서버주소
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// api키값(환경변수로 감춤)
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
// supabase에 연결
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase