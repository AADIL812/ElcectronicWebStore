import React from "react";

const Signinform = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            Userid
          </label>
          <input
            type="input"
            className="form-control"
            id="userid"
            placeholder="Enter userid"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3 form-check">
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

export default Signinform;
