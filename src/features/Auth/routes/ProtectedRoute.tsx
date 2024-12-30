import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router";

type ProtectedRouteProps = PropsWithChildren

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
    if (!userToken) {
      navigate('/auth', { replace: true })
    }
  }, [navigate])

  return children
}