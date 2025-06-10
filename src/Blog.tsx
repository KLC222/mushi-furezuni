import { supabase } from "./supabase"
import { useSuspenseQuery } from "@tanstack/react-query"

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
    return <h1>blog page</h1>
}