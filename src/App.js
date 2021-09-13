import React from "react";
import "./components/css/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";
import ServicesDetails from "./pages/ServicesDetails";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services-details" component={ServicesDetails} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog-details" component={BlogDetails} />

        {JSON.parse(localStorage.getItem("admin-info")) ===
        "Login Successful" ? (
          <>
            <Route exact path="/" component={Home} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Login} />
          </>
        )}
      </Switch>
    </>
  );
};

export default App;
