export const REQUEST_PLACE = 'REQUEST_PLACE'
export const RESPONSE_PLACE = 'RESPONSE_PLACE'
export const SET_DISTANCE = 'SET_DISTANCE'

export function requestplace(place){
  return {
    type: REQUEST_PLACE,
    place
  }
}

export function responseplace(place){
  return {
    type: RESPONSE_PLACE,
    place
  }
}

export function setDistance(place){
  return {
    type: REQUEST_PLACE,
    place
  }
}




