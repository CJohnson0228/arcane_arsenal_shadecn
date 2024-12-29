import { artisanAtom, artisanUrlAtom, authAtom } from "@/atoms/appAtom"
import { userAtom } from "@/atoms/userAtom"
import { auth } from "@/config/firebase.config"
import { artisansArray } from "@/utils/artisans"
import fetchUser from "@/utils/fetchUser"
import { onAuthStateChanged } from "firebase/auth"
import { useSetAtom } from "jotai"
import { useEffect } from "react"
import { RouterProvider } from "react-router"
import { router } from "./router"

function App() {
  const setUser = useSetAtom(userAtom)
  const setAuth = useSetAtom(authAtom)
  const setArtisan = useSetAtom(artisanAtom)
  const setArtisanUrl = useSetAtom(artisanUrlAtom)

  useEffect(() => {
    // script for adding data to firestore database
    // (async () => await setDoc(doc(db, 'database', 'PlayerClasses'), playerClasses))()
    const artisanSelect = Math.floor(Math.random() * artisansArray.length)
    setArtisan(artisanSelect)
    setArtisanUrl(artisansArray[artisanSelect])
  }, [setArtisan, setArtisanUrl])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User: ' + user.displayName + ' is logged in')
        if (user.displayName) {
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
      } else {
        console.log('no user in firebase auth state')
        setAuth(false)
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
      }
    })
    return () => unsubscribe()
  }, [setAuth, setUser])

  return (
    <div
      className="bg-[image:var(--background-image)] bg-cover bg-center w-screen h-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
