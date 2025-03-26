import { Outlet } from "react-router-dom";
import Nav from "./components/Nav"; 
import { Fragment } from 'react'

const Layout = () => {
  return (
    <Fragment>
      <Nav />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
