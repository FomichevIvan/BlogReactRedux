
//4. создаем и вывозим стор

import {blogReducer} from './blogReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore } from 'redux'
export const store = createStore (blogReducer, composeWithDevTools())// не забываем вызвать девтулз

