import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isAdd, setIsAdd] = useState(true);

  const changename = (e) => {
    setName(e.target.value);
  };

  const changeAge = (e) => {
    setAge(e.target.value);
  };

  const addData = () => {
    var obj = {
      name: name,
      age: age,
      id: data.length + 1,
    };

    var allData = [...data, obj];
    setData(allData);
    setName("");
    setAge(0);
  };

  const deleteItem = (ids) => {
    const filteredData = data.filter((item) => item.id !== ids);
    setData(filteredData);
  };

  const updateItem = (ids) => {
    const selectedObj = data.filter((item) => item.id === ids);
    console.log(selectedObj);
    setName(selectedObj[0].name);
    setAge(selectedObj[0].age);
    setId(ids);
    setIsAdd(false);
  };

  const updateData = () => {
    const updatedData = data.map((item) => {
      if (item.id == id) {
        item.name = name;
        item.age = age;
        return item;
      }
      return item;
    });
    setName("");
    setAge(0);
    setId("");
    setIsAdd(true);
  };

  return (
    <div className="App">
      <h1>CRUD</h1>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={changename}
        />
        <br />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={changeAge}
        />
        <br />
        {isAdd ? (
          <button onClick={addData}>Add</button>
        ) : (
          <button onClick={updateData}>Update</button>
        )}
      </div>
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Options</th>
          </tr>
          {data &&
            data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => updateItem(item.id)}>Update</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default App;
