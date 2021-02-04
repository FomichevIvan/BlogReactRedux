import { ADD_BLOGS, ADD_NEW_BLOG, DEL_BLOG, LIKE_BLOG } from "./actionTypes";
// 2. создаем экшнкреатор, который будет вовзвращать объект с экшеном и пэйлоадом
// принимает пэйлоад, возвращает экшн и пэйлоад в обекте
export const addBlogAC = (payload) => ({ type: ADD_BLOGS, payload });
export const addNewBlogAC = (payload) => ({ type: ADD_NEW_BLOG, payload })
export const delBlogAC = (payload) => ({type: DEL_BLOG, payload})
export const likeBlogAC = (payload) => ({type: LIKE_BLOG, payload})
