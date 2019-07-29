
import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

const Layout = props => (
  <div >
  <div>
  <NavBar />
  </div>
  <div >
    {props.children}
  </div>

</div>
);

export default Layout;
