import { authAtom, userMenuOpenAtom } from "@/atoms/appAtom";
import { userAtom } from "@/atoms/userAtom";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function useAuthentication() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()
  const setMenuOpen = useSetAtom(userMenuOpenAtom)
  const setUser = useSetAtom(userAtom)
  const setAuth = useSetAtom(authAtom)
  const navigate = useNavigate()

  const signUpCall = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    setIsLoading(true)
    setError(undefined)
    const displayName = firstName + ' ' + lastName
    const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()

    const response = await fetch('http://localhost:8082/api/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        displayName,
        firstName,
        lastName,
        initials,
        email,
        password
      })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      console.log('User Created:' + json)
      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      // update user in state
      setUser({
        displayName: displayName,
        firstName: firstName,
        lastName: lastName,
        initials: initials,
        photoUrl: (json.photoURL) ? json.photoURL : undefined,
        email: email,
        uid: json.uid,
      })
      setAuth(true)
      setIsLoading(false)
      navigate('/dashboard')
    }
  }

  const signInCall = async (
    email: string,
    password: string
  ) => {
    setIsLoading(true)
    setError(undefined)

    const response = await fetch('http://localhost:8082/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      console.log('User logged in:' + json)
      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      // update user in state
      setAuth(true)
      setUser({
        displayName: json.displayName,
        firstName: json.firstName,
        lastName: json.lastName,
        initials: json.initials,
        photoUrl: (json.photoURL) ? json.photoURL : undefined,
        email: json.email,
        uid: json.uid,
      })
      setIsLoading(false)
      navigate('/dashboard')
    }
  }

  const signOutCall = () => {
    // clear user from local storage
    localStorage.removeItem('user')
    // clear user from auth state
    setUser({
      displayName: undefined,
      firstName: undefined,
      lastName: undefined,
      initials: undefined,
      photoUrl: undefined,
      email: undefined,
      uid: undefined,
    })
    setAuth(false)
    setMenuOpen(false)
    navigate('/')
  }

  return { isLoading, error, signInCall, signUpCall, signOutCall }
}