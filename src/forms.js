import React, { useState } from "react";
import "./forms.css";

const Forms = () => {
  const [userForm, setUserForm] = useState({
    id: new Date().getTime().toString(),
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const [record, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name, value);
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = { ...userForm, id: new Date().getTime().toString() };
    setRecord([...record, getData]);

    setUserForm({
      id: "",
      username: "",
      email: "",
      phone: "",
      password: ""
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            value={userForm.username}
            onChange={handleInput}
            autoComplete="off"
            name="username"
            id="username"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={userForm.email}
            onChange={handleInput}
            autoComplete="off"
            name="email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            value={userForm.phone}
            onChange={handleInput}
            autoComplete="off"
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={userForm.password}
            onChange={handleInput}
            autoComplete="off"
            name="password"
            id="password"
          />
        </div>

        <button type="submit">Register</button>
      </form>

      <div>
        {record.map((curElm) => {
          return (
            <div key={curElm.id}>
              <p>Name: {curElm.username}</p>
              <p>Email:{curElm.email}</p>
              <p>Phone: {curElm.phone}</p>
              <p>Password:{curElm.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Forms;
