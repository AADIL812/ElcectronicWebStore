import { MdOutlineAlternateEmail } from "react-icons/md";
import React from "react";
import axios from "axios";
import { useState } from "react";
const Signupform = () => {
   const {name,setName}=useState();
    const {userid,setUserid}=useState();
    const {email,setEmail}=useState();
    const {pwd,setpwd}=useState();

    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("",{name,userid,email,pwd})
      .then(result=>console.log(result))
      .catch(err=>console.log(err))
    }
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">Enter full name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userid">Enter desired userid</label>
          <input
            type="text"
            className="form-control"
            id="userid"
            placeholder="Enter userid"
            onChange={(e)=>setUserid(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=>setpwd(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Signupform;
