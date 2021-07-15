import React from "react";
const Navbar = (props) => {
  const { auth } = props;
  const handleLogout = () => {
      console.log("logout")
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: 20}}>
      <div className="container-fluid">
        <a className="navbar-brand" to="/">
          Golang
        </a>
        {!auth ? (
          <div className="navbar-nav">
            <a className="nav-link active">
              Login
            </a>
            <a className="nav-link active">
              Signup
            </a>
          </div>
        ) : (
          <div className="navbar-nav">
            <a className="nav-link active">
              Favourite
            </a>
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