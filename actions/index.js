export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receiveEntries(entries){
  return {
    Type: RECEIVE_ENTRIES,
    entries,
  }
}

export function addEntry(entry){
  return{
    Type: ADD_ENTRY,
    entry,
  }
}