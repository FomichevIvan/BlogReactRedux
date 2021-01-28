import { ADD_BLOG } from "./actionTypes";

// 3. пишем редьюсер

export const blogReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state, action.payload];
    default:
      return state;
  }
};
