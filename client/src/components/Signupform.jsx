import React, { useState } from "react";
import axios from "axios";

const Signupform = () => {
  const [name, setName] = useState("");
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    console.log("Submit button pressed");
    e.preventDefault();

    // POST request to the signup API
    axios
      .post("http://localhost:5000/signup", { name, userid, email, pwd })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Enter full name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="userid">Enter desired userid</label>
        <input
          type="text"
          className="form-control"
          id="userid"
          placeholder="Enter userid"
          onChange={(e) => setUserid(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Signupform;
