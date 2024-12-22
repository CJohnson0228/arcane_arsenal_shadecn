import { db } from "@/config/firebase.config"
import { User } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"

async function fetchUser(user: User) {
  const userSnap = await getDoc(doc(db, 'users', user.uid))
  if (userSnap.exists()) {
    const userDoc = userSnap.data()
    return userDoc
  }
}

export default fetchUser