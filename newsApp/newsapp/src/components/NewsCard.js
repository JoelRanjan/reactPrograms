import React from "react";
import "../App.css";

const NewsCard = ({ data }) => {
  const { urlToImage, title, author, description, publishedAt } = data;
  return (
    <div className="main">
      <div className="card">
        <div>
          <img src={urlToImage} alt="img" className="cardImg" />
        </div>
        <div className="sec">
          <p className="title">{title}</p>
          <p className="para">
            <span className="short">Short</span> by {author} / {publishedAt}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
