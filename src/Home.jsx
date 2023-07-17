import React, { useState } from "react";
// import {Button ,Table} from 'react-bootstrap'
// import "bottstrap/dist/css/bootstrap.min.css"
import Employee from "./Empliye";

function Home() {
  const [items, setitems] = useState(Employee);
  const [age , setAge]  = useState("")
  const [newEmpl, setEmpl] = useState("");
  const [editItems, setEditItems] = useState("");

  // Create
  const handleChange = () => {
    if (newEmpl.trim() !== "") {
      const newItemObject = {
        id: new Date().getTime(),
        name: newEmpl,
        age: age,
      };
      setitems([...items, newItemObject])
      setEmpl("")
      setAge("")
      console.log(newItemObject);
    }
  };

  // Read
  const handleToRead = (id) => {
  const toEdit = items.find(item => item.id === id)
  if (toEdit) {
    setEmpl(toEdit.name)
    setAge(toEdit.age)
  setEditItems(toEdit);
  }
}

  // Editi
const handleEdit = () => {
    const toUpdate = items.map((item) => (item.id === editItems.id ? { ...item ,name : newEmpl , age : age} : item))
    setitems(toUpdate)
    setEmpl("");
    setAge("");
}

  // Delete
  const handleDelete = (id) => {
    const toDelete = items.filter(item => item.id !== id)
    setitems(toDelete)
  }

  return (
    <>
      <input type="text" value={newEmpl} onChange={(e) => setEmpl(e.target.value)} placeholder="Name" />
      <br />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <button onClick={handleChange}> Add </button>
      <button onClick={handleEdit}> Update </button>
      <div style={{ margin: "10rem" }}>
        <thread>
          <tr>
            <th style={{ padding: "10px" }}> Name</th>
            <th style={{ padding: "10px" }}>Age</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thread>
        <tbody>
          {Employee && Employee.length > 0
            ? items.map((item) => {
                return (
                  <tr>
                    <td style={{ padding: "10px" }}>{item.name}</td>
                    <td style={{ padding: "25px" }}>{item.age}</td>
                    <td style={{ padding: "10px" }}>
                      <button onClick={() => handleToRead(item.id)}>Edit</button>
                    </td>
                    <td style={{ padding: "10px" }}>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            : "NO data available"}
        </tbody>
      </div>
    </>
  );
}

export default Home;
