import { auth } from "@/config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router";

type ProtectedRouteProps = PropsWithChildren

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/auth', { replace: true })
      }
    })
  }, [navigate])

  return children
}