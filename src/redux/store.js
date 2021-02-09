import thunk from 'redux-thunk'
import logger from 'redux-logger'
//4. создаем и вывозим стор

import {blogReducer} from './blogReducer'
import {errReducer} from  './errReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
// export const store = createStore (
//   blogReducer, compose(applyMiddleware(logger, thunk), composeWithDevTools()))//комбинируем девтулз и через applymid...подключаем логгер и санки

  
export const store = createStore(combineReducers({blogs: blogReducer, errors: errReducer}), compose(applyMiddleware(logger, thunk), composeWithDevTools()))
