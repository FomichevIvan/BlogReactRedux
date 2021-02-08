import { ADD_BLOGS, ADD_NEW_BLOG, DEL_BLOG, LIKE_BLOG, EDIT_BLOG } from "./actionTypes";
import {useEffect} from 'react'
// 2. создаем экшнкреатор, который будет вовзвращать объект с экшеном и пэйлоадом
// принимает пэйлоад, возвращает экшн и пэйлоад в обекте
export const addBlogAC = (payload) => ({ type: ADD_BLOGS, payload });
export const addNewBlogAC = (payload) => ({ type: ADD_NEW_BLOG, payload })
export const delBlogAC = (payload) => ({type: DEL_BLOG, payload})
export const likeBlogAC = (payload) => ({type: LIKE_BLOG, payload})
export const editBlogAC = (payload) => ({type: EDIT_BLOG, payload})

//создаем новый экшн.криэйтор, помещаем туда логику из юзэффекта. вызываем его кнопкой со страницы, где мы хотим отрендерить блоги
export const loadBlogsAC = () => (dispatch, getState) => {// здесь диспатч - это функция, которая внутри добавит  список блогов в стор

 
    fetch('https://jsonplaceholder.typicode.com/posts')// запрашиваю посты
    .then(res=> res.json())// преобразую в джейсон
    // .then(res=>res.splice(res.length - 10))// обрезаю (хочу только 10 последних)
    .then(res => res.map(el=> ({...el, isLiked: false})))
    .then(res=>dispatch(addBlogAC(res))//пишу в стор
    )
    
 

}
