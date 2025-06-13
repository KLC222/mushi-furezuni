import { supabase } from "./supabase"
import { useSuspenseQuery } from "@tanstack/react-query"
import Layout from "./Layout"

export default function Blog(){
    

    const {data} = useSuspenseQuery({
        queryKey: ['blog'],
        queryFn: async ()=> {
          const response = await supabase
            .from('blog')
            .select('*')
          if (response.error) {
            throw response.error
          }
          return response.data
        }
    })
    console.log('blog data',data)
    return <>
        <Layout>
            <h1>ブログページは準備中です。</h1>
        </Layout>
    </>
}