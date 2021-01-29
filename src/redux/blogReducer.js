import { ADD_BLOG, ADD_NEW_BLOG } from "./actionTypes";

// 3. пишем редьюсер

export const blogReducer = (state = [[]], action) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state, action.payload];
    case ADD_NEW_BLOG: 
      console.log(state);  
         
      return [[...[...state[0]], action.payload]]
    
    default:
      return state;
  }
};
