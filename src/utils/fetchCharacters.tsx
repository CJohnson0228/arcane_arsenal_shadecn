import { CharacterType } from "@/types/Character.type";

async function fetchUsersCharacters(userID: string) {
  const response = await fetch(`http://localhost:8082/api/characters/myCharacters/${userID}`)
  const json = await response.json()
  const charactersArray: CharacterType[] = []

  if (response.ok) {
    json.forEach((character: CharacterType) => {
      charactersArray.push(character)
    })
  }
  return charactersArray
}

async function fetchCharacter(characterID: string) {
  const response = await fetch(`http://localhost:8082/api/characters/${characterID}`)
  const json = await response.json()
  if (response.ok) {
    return (json)
  }
}

export { fetchCharacter, fetchUsersCharacters };

