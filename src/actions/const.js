

export const REQUEST_PLACE = 'REQUEST_PLACE'
export const RESPONSE_PLACE = 'RESPONSE_PLACE'
export const SET_DISTANCE = 'SET_DISTANCE'
export const SELECT_PLACE = 'SELECT_PLACE'

export function selectPlace(place){
  return {
    type: SELECT_PLACE,
    place
  }
}

export function requestplace(place){
  return {
    type: REQUEST_PLACE,
    place
  }
}

export function responseplace(place){
  return {
    type: RESPONSE_PLACE,
    place,
    coords: json.data.children.map(child => child.data)
  }
}

export function setDistance(place){
  return {
    type: REQUEST_PLACE,
    place
  }
}




