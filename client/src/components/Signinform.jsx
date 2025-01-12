import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signinform = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        userid,
        password,
      });

      if (response.status === 200) {
        // Redirect or show success message
        alert("Login successful!");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Userid doesn't exist.");
      } else if (error.response && error.response.status === 401) {
        alert("Password is incorrect.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            Userid
          </label>
          <input
            type="text"
            className="form-control"
            id="userid"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            placeholder="Enter userid"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signinform;
