import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('mytoolbox'))

    if (session) {
      router.push('/home')
    } else {
      router.push('/login')
    }
  }, [router])

  return null
}

Home.isPublicPage = true
