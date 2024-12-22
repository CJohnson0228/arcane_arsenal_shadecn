import { authAtom, userMenuOpenAtom } from "@/atoms/appAtom";
import { userAtom } from "@/atoms/userAtom";
import { auth, db } from "@/config/firebase.config";
import fetchUser from "@/utils/fetchUser";
import { firebaseAuthErrorFormater } from "@/utils/firebaseAuthError";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useSetAtom } from 'jotai';
import { useState } from "react";
import { useNavigate } from "react-router";

export default function useAuthentication() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()
  const setMenuOpen = useSetAtom(userMenuOpenAtom)
  const setUser = useSetAtom(userAtom)
  const setAuth = useSetAtom(authAtom)
  const navigate = useNavigate()

  const signInCall = async (
    email: string,
    password: string
  ) => {
    setIsLoading(true)
    setError(undefined)
    await signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        if (err instanceof FirebaseError) {
          console.log(err.code)
          setError(firebaseAuthErrorFormater(err.code))
          setIsLoading(false)
        }
      })
      .then(async (userCredential) => {
        if (userCredential) {
          const user = userCredential.user
          fetchUser(user).then((data) => {
            if (data) {
              setUser({
                displayName: data.displayName,
                firstName: data.firstName,
                lastName: data.lastName,
                initials: data.initials,
                photoUrl: data.photoURL,
                email: data.email,
                emailVerified: data.emailVerified,
                uid: data.uid,
              })
            }
          })
          setAuth(true)
        }
      })
      .then(() => {
        setIsLoading(false)
        navigate('/dashboard')
      })

  }

  const signUpCall = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    setIsLoading(true)
    setError(undefined)
    await createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        if (err instanceof FirebaseError) {
          console.log(err.code)
          setError(firebaseAuthErrorFormater(err.code))
          setIsLoading(false)
        }
      })
      .then((userCredential) => {
        if (userCredential) {
          const user = userCredential.user
          const displayName = firstName + ' ' + lastName
          if (auth.currentUser) {
            updateProfile(auth.currentUser, {
              displayName: displayName
            })
              .then(() => {
                setDoc(doc(db, 'users', user.uid), {
                  displayName: displayName,
                  firstName: firstName,
                  lastName: lastName,
                  initials: firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase(),
                  photoUrl: user.photoURL,
                  email: email,
                  emailVerified: user.emailVerified,
                  uid: user.uid,
                })
                console.log('User created: profile Updated')
                setUser({
                  displayName: displayName,
                  firstName: firstName,
                  lastName: lastName,
                  initials: firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase(),
                  photoUrl: user.photoURL === null ? undefined : user.photoURL,
                  email: email,
                  emailVerified: user.emailVerified,
                  uid: user.uid,
                })
                setAuth(true)
              })
          }
        }
      })
      .then(() => {
        setIsLoading(false)
        navigate('/dashboard')
      })
  }

  const signOutCall = async () => {
    setIsLoading(true)
    try {
      await signOut(auth)
      setUser({
        displayName: undefined,
        firstName: undefined,
        lastName: undefined,
        initials: undefined,
        photoUrl: undefined,
        email: undefined,
        emailVerified: false,
        uid: undefined,
      })
      setMenuOpen(false)
      setAuth(false)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
      navigate('/')
    }
  }

  return { error, isLoading, signInCall, signUpCall, signOutCall }
}