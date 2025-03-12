import React from "react";
import "./CommentCard.scss";

const CommentCard = ({ name, email, body, avatar }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
        <h3>Name:{name}</h3>

        <h4>Email:{email}</h4>

        <p>{body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
