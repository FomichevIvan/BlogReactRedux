import { ADD_BLOGS, ADD_NEW_BLOG, DEL_BLOG } from "./actionTypes";

// 3. пишем редьюсер

export const blogReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BLOGS:
      return [...state, ...action.payload];
    
      case ADD_NEW_BLOG:            
      return [...state, action.payload]
      
      case DEL_BLOG:
      return [...state.filter(el=> el.id !== +action.payload)]

    
    default:
      return state;
  }
};
