'use client'
import { useRouter } from "next/navigation"
import SignUp from "@/Components/SignUp"
export default function Home() {
  const router = useRouter()
  const Id = router.query  
  return (
    <>
    {Id === "signup" && <SignUp/>}    
    {Id === "signin" && <SignIn/>}  
    </>
  )
}
