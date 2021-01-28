import { ADD_BLOG } from "./actionTypes";
// 2. создаем экшнкреатор, который будет вовзвращать объект с экшеном и пэйлоадом
// принимает пэйлоад, возвращает экшн и пэйлоад в обекте
export const addBlogAC = (payload) => ({ type: ADD_BLOG, payload });
