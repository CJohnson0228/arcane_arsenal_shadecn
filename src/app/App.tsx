import { artisanAtom, artisanUrlAtom, authAtom } from "@/atoms/appAtom"
import { userAtom } from "@/atoms/userAtom"
import { artisansArray } from "@/utils/artisans"
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
    const artisanSelect = Math.floor(Math.random() * artisansArray.length)
    setArtisan(artisanSelect)
    setArtisanUrl(artisansArray[artisanSelect])
  }, [setArtisan, setArtisanUrl])

  // database token authentication here
  useEffect(() => {
    (async () => {
      const userToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
      if (userToken) {
        const response = await fetch(`http://localhost:8082/api/user/${userToken.uid}`)
        const json = await response.json()
        if (!response.ok) {
          console.log('there was an error')
        }
        if (response.ok) {
          setAuth(true)
          setUser({
            displayName: json.displayName,
            firstName: json.firstName,
            lastName: json.lastName,
            initials: json.initials,
            photoUrl: (json.photoURL) ? json.photoURL : undefined,
            email: json.email,
            uid: json._id,
          })
        }
      }
    })()

  }, [setAuth, setUser])

  // firebase auth state here
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log('User: ' + user.displayName + ' is logged in')
  //       if (user.displayName) {
  //         fetchUser(user).then((data) => {
  //           if (data) {
  //             setUser({
  //               displayName: data.displayName,
  //               firstName: data.firstName,
  //               lastName: data.lastName,
  //               initials: data.initials,
  //               photoUrl: data.photoURL,
  //               email: data.email,
  //               uid: data.uid,
  //             })
  //           }
  //         })
  //         setAuth(true)
  //       }
  //     } else {
  //       console.log('no user in firebase auth state')
  //       setAuth(false)
  //       setUser({
  //         displayName: undefined,
  //         firstName: undefined,
  //         lastName: undefined,
  //         initials: undefined,
  //         photoUrl: undefined,
  //         email: undefined,
  //         uid: undefined,
  //       })
  //     }
  //   })
  //   return () => unsubscribe()
  // }, [setAuth, setUser])

  return (
    <div
      className="bg-[image:var(--background-image)] bg-cover bg-center w-screen h-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
