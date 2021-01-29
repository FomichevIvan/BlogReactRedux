import { ADD_BLOG, ADD_NEW_BLOG } from "./actionTypes";
// 2. создаем экшнкреатор, который будет вовзвращать объект с экшеном и пэйлоадом
// принимает пэйлоад, возвращает экшн и пэйлоад в обекте
export const addBlogAC = (payload) => ({ type: ADD_BLOG, payload });
export const addNewBlogAC = (payload) => ({ type: ADD_NEW_BLOG, payload })
