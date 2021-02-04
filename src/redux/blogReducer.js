import { ADD_BLOGS, ADD_NEW_BLOG, DEL_BLOG, LIKE_BLOG } from "./actionTypes";

// 3. пишем редьюсер

export const blogReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BLOGS:
      return [...state, ...action.payload]; // разворачиваем стейт, разворачиваем пэйлоад (т.к. это тоже массив)

    case ADD_NEW_BLOG:
      return [...state, { ...action.payload, isLiked: false }]; //разворачиваем существующий стейт и дописываем туда пэйлоад в виде объекта с новым полем лайков

    case DEL_BLOG:
      return [...state.filter((el) => el.id !== +action.payload)]; // фильтруем и оставляем все элементы стейта, кроме того, айди которого равен переданному в экшн.пейлоад
    case LIKE_BLOG:
      return [
        ...state.map((blog) => {
          if (blog.id !== +action.payload) {
            return blog;
          }
          return {
            ...blog,
            isLiked: !blog.isLiked,
          };
        }),
      ];

    default:
      return state;
  }
};
