import { AsyncStorage } from 'react-native'
import DECK_STORAGE_KEY from './helpers';

export function addCardToDeck (key, entry){
    AsyncStorage.setItem(key, JSON.stringify(entry));
}
export async function getDecks(keys){
  return await AsyncStorage.multiGet(keys)
}
export async function removeEntry (key) {
    var value = await AsyncStorage.getItem(key)
    return value
}


