import { combineReducers  } from 'redux'
import {SET_PLACE,OBT_COORDS,SET_DISTANCE} from '../actions'

export function getplace(state = 'place', action) {
  switch (action.type) {
    case SET_PLACE:
      return action.place
    default:
      return state
  }
}

export function getCoords(state = {
    x: 0 ,
    y: 0
  }, action ){
  switch (action.type){
    case OBT_COORDS:
      return Object.assign({}, state, {
        x: action.lat,
        y: action.lng
      })
    default:
      return state
  }
}

export function getDistance(state = 0, action){
  switch (action.type){
    case SET_DISTANCE:
      return action.distan
    default:
      return state
  }
}


const rootReducer = combineReducers({
  getplace,
  getCoords,
  getDistance
});

module.exports =rootReducer
