import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {}, []);
  const handleSubmit = (e) => {
    // console.log(name, email, password);
    e.preventDefault();
    axios("http://localhost:10000/login", {method: 'post', data: {email, password}, withCredentials: true,}).then((res) => console.log(res)).catch((err) => console.log("err", err));
    history.push("Home");
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
