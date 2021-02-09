import { act } from 'react-dom/test-utils'
import {SHOW_ERR} from './actionTypes'


export const errReducer = (state='', action) => {
  switch (action.type) {
    case SHOW_ERR:
      return      state + action.payload
      
     
  
    default:
     return state
  }
}
