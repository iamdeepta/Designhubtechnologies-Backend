import React from "react";
import "./components/css/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";
import ServicesDetails from "./pages/ServicesDetails";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
//import BlogDetails from "./pages/BlogDetails";
import Newsletter from "./pages/Newsletter";
import ContactMessages from "./pages/ContactMessages";
import ContactDetails from "./pages/ContactDetails";
import Login from "./pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        {JSON.parse(localStorage.getItem("admin-info")) ===
          "Login Successful" ||
        JSON.parse(localStorage.getItem("admin-info")) === "topadmin" ? (
          <>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/services-details" component={ServicesDetails} />
            <Route exact path="/blog" component={Blog} />
            {/* <Route exact path="/blog-details" component={BlogDetails} /> */}
            <Route exact path="/newsletter" component={Newsletter} />
            <Route exact path="/contact-messages" component={ContactMessages} />
            <Route exact path="/contact-details" component={ContactDetails} />
            <Route exact path="/" component={Login} />

            <Redirect to="/home" />
          </>
        ) : (
          <>
            <Route exact path="/" component={Login} />
            <Redirect to="/" />
          </>
        )}
      </Switch>
    </>
  );
};

export default App;
