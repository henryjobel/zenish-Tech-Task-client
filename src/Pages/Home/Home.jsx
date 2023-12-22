import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-blue-400 hero" >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" hero-content text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-3xl font-bold" data-aos="zoom-in">Building a Collaborative Platform with React.js for Frontend Excellence and Express, Node.js, and MongoDB for Backend Efficiency.</h1>
          <p className="mb-5" data-aos="zoom-in">mbark on a journey to create a responsive and visually appealing task management platform that redefines collaboration and enhances task efficiency. Our goal is to provide an intuitive experience that transforms task management for individuals and teams</p>
          {user ? (
            <Link to={"/dashboard"}>
              <button className="text-white btn btn-outline btn-success">
                Go Dashboard
              </button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-outline btn-success" >
                Let’s Explore
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
