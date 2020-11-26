import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../admin/Home";
import SideBar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/styles/App.css";
import { Category } from "../admin/categories/Category";

const RootRoutes = (props) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const setToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const { match } = props;

  return (
    <main className={sidebarToggle ? "sb-sidenav-toggled" : ""}>
      <Header setSidebarToggle={() => setToggle()} />
      <div id="layoutSidenav">
        <SideBar/>
        <div id="layoutSidenav_content" className="main-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/all-categories" component={Category} />
          </Switch>
          <Footer/>
        </div>
      </div>
    </main>
  );
};

export default RootRoutes;
