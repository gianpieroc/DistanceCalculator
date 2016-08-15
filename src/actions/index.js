export const SET_PLACE = 'SET_PLACE'
export const OBT_COORDS = 'OBT_COORDS'
export const SET_DISTANCE = 'SET_DISTANCE'

export function requestplace(place){
  return {
    type: SET_PLACE,
    place
  }
}

export function obtainCoords(json){
  return {
    type: OBT_COORDS,
    coords: json.data.children.map(child => child.data)
  }
}

export function setDistance(distance){
  return {
    type: SET_DISTANCE,
    distance
  }
}




