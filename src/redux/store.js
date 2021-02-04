import thunk from 'redux-thunk'
import logger from 'redux-logger'
//4. создаем и вывозим стор

import {blogReducer} from './blogReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware, createStore, compose } from 'redux'
export const store = createStore (
  blogReducer, compose(applyMiddleware(logger, thunk), composeWithDevTools()))//комбинируем девтулз и через applymid...подключаем логгер и санки

  

