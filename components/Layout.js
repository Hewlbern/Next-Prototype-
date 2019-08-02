
import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

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
