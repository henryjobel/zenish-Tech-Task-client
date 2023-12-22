import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <div className="container flex-grow px-10 mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
