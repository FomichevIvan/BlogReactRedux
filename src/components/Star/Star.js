import { useState } from "react";
import { likeBlogAC } from "../../redux/actionCreators";
import { useDispatch } from "react-redux";

const Star = ({ isLiked, id }) => {
  const dispatch = useDispatch();

  const likeHandler = (e) => {
    dispatch(likeBlogAC(id));
  };

  return (
    <div className="pointer">
    <i 
      onClick={likeHandler}
      className={isLiked ? "star fa fa-star" : "star fa fa-star-o"  }
      aria-hidden="true"
    ></i></div>
  );
};

export default Star;
