import { AsyncStorage } from 'react-native'

export function addCardToDeck (key, entry){
    AsyncStorage.mergeItem(key, JSON.stringify(entry));
}
export function addDeck (key, entry){
    AsyncStorage.setItem(key, JSON.stringify(entry));
}
export async function getDecks(keys){
  return await AsyncStorage.multiGet(keys)
}
export async function removeEntry (key) {
    var value = await AsyncStorage.getItem(key)
    return value
}


