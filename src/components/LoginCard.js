import React from "react";
import "./css/login.css";
import { useState } from "react";
//import Login from "../pages/Login";
import AppUrl from "../classes/AppUrl";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginCard = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    //console.log(username, password);
    let items = { username, password };

    if (username === "" || password === "") {
      toast.error("Please enter username and password");
    } else {
      let result = await fetch(AppUrl.base_url + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(items),
      });
      result = await result.json();

      console.log(result);

      if (result.error) {
        toast.error("Incorrect username or password");
      } else {
        localStorage.setItem("admin-info", JSON.stringify(result.success));
        history.push("/home");
      }
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="login_div">
        <div className="card login_card">
          <div className="card-header login_card_header">
            <img
              src="images/logo.png"
              alt="designhubtechnologies logo"
              className="login_logo"
            />
          </div>
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group mt-4">
              <button
                type="button"
                className="login_btn btn btn-primary"
                onClick={() => login()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
