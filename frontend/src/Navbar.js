import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Redirect, useHistory } from "react-router-dom";
const Navbar = (props) => {
  const { auth } = props;
  const history = useHistory();
  const handleLogout = () => {
      axios.get("http://localhost:10000/logout").then(res => {console.log(res)})
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: 20}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Golang
        </Link>
        {!auth ? (
          <div className="navbar-nav">
            <Link className="nav-link active" to="/login">
              Login
            </Link>
            <Link className="nav-link active" to="/signup">
              Signup
            </Link>
          </div>
        ) : (
          <div className="navbar-nav">
            <a className="nav-link active" onClick={handleLogout}>
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;