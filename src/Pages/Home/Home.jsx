import React, { useContext } from "react";
import banner from "../../assets/task-management-removebg-preview.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <div className="min-h-screen bg-blue-400 hero" >
          <div className="hero-overlay bg-opacity-60" data-aos="zoom-in"></div>
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <div className="min-h-screen bg-green-300 hero">
          <div className="hero-overlay bg-opacity-60" data-aos="zoom-in"></div>
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <div className="min-h-screen hero bg-yellow">
          <div className="hero-overlay bg-opacity-60" data-aos="zoom-in"></div>
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <div className="min-h-screen hero bg-zinc-700" >
          <div className="hero-overlay bg-opacity-60" data-aos="zoom-in"></div>
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
