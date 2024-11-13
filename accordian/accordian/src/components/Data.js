import React from "react";
import { useState } from "react";
import "../App.css";

const dummyData = [
  {
    heading: "Do i have to allow cookies",
    para: "cookies data ius displayed here",
    isOpen: false,
  },
  {
    heading: "Do i have to allow bank",
    para: "bank data ius displayed here",
    isOpen: false,
  },
  {
    heading: "Do i have to allow house",
    para: "house data ius displayed here",
    isOpen: false,
  },
  {
    heading: "Do i have to allow streetsss",
    para: "streetsss data ius displayed here",
    isOpen: false,
  },
  {
    heading: "Do i have to allow colony",
    para: "colony data ius displayed here",
    isOpen: false,
  },
];

const Data = () => {
  const [allData, setAllData] = useState(dummyData);
  const [allowOpen, setAllowOpen] = useState(false);

  const showData = (id) => {
    if (!allowOpen) {
      const filteredData = allData.filter((item, index) => {
        if (index === id) {
          item.isOpen = !item.isOpen;
          return item;
        } else {
          item.isOpen = false;
          return item;
        }
      });
      setAllData(filteredData);
    } else {
      const filteredData = allData.filter((item, index) => {
        if (index === id) {
          item.isOpen = !item.isOpen;
          return item;
        }
        return item;
      });
      setAllData(filteredData);
    }
  };
  const toggleCheck = () => {
    setAllowOpen(!allowOpen);
  };

  return (
    <div>
      <h1>data</h1>
      <label>
        <input type="checkbox" onChange={toggleCheck} value={allowOpen} />
        Allow all accordians open
      </label>
      {allData &&
        allData.map((item, index) => (
          <div>
            <div className="board">
              <h1>{item.heading}</h1>
              <button className="button" onClick={() => showData(index)}>
                -
              </button>
            </div>
            {item.isOpen && <p>{item.para}</p>}
          </div>
        ))}
    </div>
  );
};

export default Data;
