import React from "react";
import { useState, useEffect } from "react";
import API_KEY from "../utils/apikey";
import NewsCard from "./NewsCard";
import { GiHamburgerMenu } from "react-icons/gi";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const [newsData, setNewsData] = useState([]);
  const [showSide, setShowSide] = useState(false);
  const [showShim, setShowShim] = useState(false);
  const [showContent, setShowContent] = useState([]);
  const sideData = [
    "Business",
    "Entertainment",
    "Science",
    "Sports",
    "Technology",
  ];

  const getData = async () => {
    setShowShim(true);
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY
    );
    const data = await res.json();
    setShowShim(false);
    setNewsData(data.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleSide = () => {
    setShowSide(!showSide);
    setShowContent([]);
  };

  const showFullInfo = (id) => {
    const filtered = newsData.filter((item, index) => index === id);
    setShowContent(filtered);
  };

  const changeData = async (item) => {
    setShowSide(false);
    setShowShim(true);
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=" +
        item +
        "&apiKey=" +
        API_KEY
    );
    const data = await res.json();
    setShowShim(false);
    setShowContent([]);
    setNewsData(data.articles);
  };

  return (
    <div
      className={"mainContainer" + (showContent.length !== 0 ? "One" : "Two")}
    >
      <div className="mainn">
        <div className="heading">
          <GiHamburgerMenu className="icon" onClick={toggleSide} />
          <h1 className="titleOne">Inshorts</h1>
        </div>
      </div>
      <div className="container">
        {showSide && (
          <div className="sidebar">
            <div>
              <p>Categories</p>
              <div>
                <ul className="lists">
                  {sideData.map((item) => (
                    <li onClick={() => changeData(item)} className="listItem">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="rightCon">
          {showShim ? (
            <Shimmer />
          ) : (
            newsData &&
            newsData.map((item, index) => (
              <div onClick={() => showFullInfo(index)}>
                <NewsCard data={item} />
              </div>
            ))
          )}
        </div>
        <div className="contentr">
          {showContent &&
            showContent.map((item) => (
              <div className="box">
                <p className="titleCon">{item.title}</p>
                <p>{item.content}</p>
                <p className="hyper">
                  <a href={item.url} target="_blank">
                    Read more
                  </a>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
