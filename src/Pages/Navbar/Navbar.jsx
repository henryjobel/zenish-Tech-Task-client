import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user);

  const handelSignOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  
  const [isDashboardMenuOpen, setDashboardMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDashboardMenu = () => {
    setDashboardMenuOpen(!isDashboardMenuOpen);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setDashboardMenuOpen(false);
  };

  const NavLinks = (
    <nav className="flex gap-3 md:gap-4 lg:gap-10 lg:text-xl text-[18px]">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/whyus">Why ZenichTech</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
      {user ? null : <NavLink to="/register">Register</NavLink>}
    </nav>
  );

  return (
    <nav className="border-gray-200" data-aos="zoom-in">
      <div className="flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-4xl font-bold uppercase black">
            Zenish<span className="text-blue-600">Tech</span>
          </h1>
        </Link>
        <div className="flex items-center md:order-2">
          <div className="relative">
            {user ? (
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                id="user-menu-button"
                aria-expanded={isDashboardMenuOpen}
                onClick={toggleDashboardMenu}
              >
                <span className="sr-only">Open dashboard menu</span>
                <img
                  className="rounded-full w-11 h-11"
                  src={user.photoURL}
                  alt="user photo"
                />
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline btn-info">
                  Login
                </button>
              </Link>
            )}

            <div
              className={`z-50 ${
                isDashboardMenuOpen ? "block" : "hidden"
              } absolute right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
              id="dashboard-dropdown"
            >
              {user ? (
                <div className="px-12 py-4">
                  <span className="block text-center text-gray-900">
                    <p>Welcome, {user?.displayName}</p>
                  </span>
                  <span className="block text-center text-gray-500 truncate">
                    <p>{user?.email}</p>
                  </span>
                </div>
              ) : null}

              <ul className="py-2" aria-labelledby="user-menu-button">
                {user ? (
                  <ul>
                    <li className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-100">
                      <NavLink to="/">
                        <button>Home</button>
                      </NavLink>
                    </li>
                    <li className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-100">
                      <NavLink to="/dashboard">
                        <button>Dashboard</button>
                      </NavLink>
                    </li>
                    <li className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-100">
                      <NavLink to="/profile">
                        <button>Profile</button>
                      </NavLink>
                    </li>
                    <li className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-100">
                      <button onClick={handelSignOut}>Sign Out</button>
                    </li>
                  </ul>
                ) : null}
              </ul>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-user"
            aria-expanded={isDashboardMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-10 h-10 text-black ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen ? (
          <div
            className="items-center justify-between w-full mt-4 border border-gray-100 rounded-lg md:hidden bg-gray-50 bg-opacity-90 backdrop-blur-md"
            id="navbar-mobile-menu"
          >
            <ul className="flex flex-col p-4 space-y-4 text-center">
              <li className="block text-gray-900 hover:text-green-500">
                <NavLink to="/">Home</NavLink>
              </li>
              <NavLink to="/whyTasky">Why Tasky</NavLink>

              <li className="block text-gray-900 hover:text-blue-700">
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              {user ? (
                <>
                  <li className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-100">
                    <button onClick={handelSignOut}>Sign Out</button>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        ) : null}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {NavLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
