import { createContext, useContext, useEffect, useState } from "react"
import createAPIClient from "@/app/api/createAPIClient.mjs"
import { useNavigate } from "react-router-dom"
import config from "@/app/api/config.mjs"
import { decode } from "hono/jwt"

const AppContext = createContext()

export const AppContextProvider = ({ children, isPublicPage }) => {
  const [session, setSession] = useState(null)
  const [jwt, setJWT] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const storedJwt = localStorage.getItem("mytoolbox") || localStorage.getItem("token")
    const storedSession = localStorage.getItem("session")

    if (storedSession) {
      setSession(JSON.parse(storedSession))
    }

    if (storedJwt) {
      try {
        const { payload } = decode(storedJwt)
        if (payload && payload.id) {
          setSession(payload)
          setJWT(storedJwt)
        } else {
          clearStorage()
        }
      } catch (error) {
        clearStorage()
      }
    }
    setIsLoading(false)
  }, [])

  const apiClients = {}
  useEffect(() => {
    if (jwt) {
      Object.keys(config).forEach(key => {
        apiClients[key] = createAPIClient({ jwt, apiKey: key })
      })
    }
  }, [jwt])

  const clearStorage = () => {
    localStorage.removeItem("mytoolbox")
    localStorage.removeItem("token")
    localStorage.removeItem("session")
  }

  if (!isPublicPage && session === null && !isLoading) {
    navigate('/login') // Redirect to login if needed
  }

  const appContextValue = {
    state: { session, isLoading },
    action: {
      setSession,
      setJWT,
    }
  }

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
