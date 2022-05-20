import { useState } from "react"

const useAdmin=(user)=>{
    const [admin,setAdmin]=useState(true)
    setAdmin(true)
    return [admin]
}
export default useAdmin
