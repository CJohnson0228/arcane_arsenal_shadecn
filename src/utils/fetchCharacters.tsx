import { db } from "@/config/firebase.config";
import { SimpleCharacterType } from "@/types/Character.type";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

async function fetchUsersCharacters(userID: string) {
  const charactersSnap = await getDocs(query(collection(db, 'characters'), where("playerID", "==", userID)))
  const charactersArray: SimpleCharacterType[] = []
  charactersSnap.forEach((char) => {
    const data = char.data()
    const character = {
      characterName: data.characterName,
      characterID: data.characterID,
      species: data.species,
      gender: data.gender,
      mainClass: data.mainClass,
      subClass: data.subClass,
      level: data.level,
    }
    charactersArray.push(character)
  })
  return charactersArray
}

async function fetchCharacterFull(characterID: string) {
  const characterSnap = await getDoc(doc(db, 'characters', characterID))
  if (characterSnap.exists()) {
    const characterDoc = characterSnap.data()
    console.log(characterDoc)
    return characterDoc
  }
}

export { fetchCharacterFull, fetchUsersCharacters };

