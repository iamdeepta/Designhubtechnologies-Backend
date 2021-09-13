import React from "react";
import "./css/login.css";

const LoginCard = () => {
  return (
    <>
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
              />
            </div>
            <div className="form-group mt-4">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="form-group mt-4">
              <button type="button" className="login_btn btn btn-primary">
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
