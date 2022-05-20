import { useState } from "react"

const useAdmin=(user)=>{
    const [admin,setAdmin]=useState(false)
    // setAdmin(true)
    return [admin]
}
export default useAdmin
