import React, { useState, useContext } from "react";
import axios from "axios";
import { userContext } from "../Userprovider";

const Signupform = () => {
  const [name, setName] = useState("");
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // Consume userContext
  const { setUser } = useContext(userContext);
  const api="http://localhost:5000/signup";
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      // Send signup request to backend
      const response = await axios.post(api, {
        name,
        userid,
        email,
        pwd,
      });

      if (response.status === 200) {
        console.log("Signup successful:", response.data);

        // Update user context
        setUser({
          userid: response.data.user.UserId,
          username: response.data.user.Name,
        });

        alert("User successfully signed up!");
      }
    } catch (error) {
      console.error("Error during signup:", error);

      if (error.response) {
        const status = error.response.status;

        if (status === 400) {
          alert("Bad request. Please check your inputs.");
        } else if (status === 409) {
          alert("User already exists. Please choose another User ID.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Enter full name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name} // Controlled input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="userid">Enter desired userid</label>
        <input
          type="text"
          className="form-control"
          id="userid"
          value={userid} // Controlled input
          onChange={(e) => setUserid(e.target.value)}
          placeholder="Enter userid"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={pwd} // Controlled input
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Password"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Signupform;
