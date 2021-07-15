import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:10000/user", { withCredentials: true })
      .then((res) => {
        setName(res.data.Name);
        setEmail(res.data.Email);
      })
      .catch((err) => console.log("err", err));
  }, []);
  if (!props.auth) {
      return <Redirect to="/login" />;
  }
  return (
    <div>
      <p><b>Name:</b> {name}</p>
      <p><b>Email:</b> {email}</p>
    </div>
  );
};

export default Home;
