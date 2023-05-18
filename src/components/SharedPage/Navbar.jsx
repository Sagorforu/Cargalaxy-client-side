import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);
    const user = null;


  return (
    <div>
      <div className="py-5 lg:flex items-center justify-between lg:px-36 px-2">
        <Link to="/">
          <h2 className="active font-bold text-4xl">
            Car<span className="active">Galaxy</span>
          </h2>
        </Link>
        <ul className="lg:flex py-3">
          <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#383838]"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
            <NavLink
              to="/allToys"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#383838]"
              }
            >
              All Toys
            </NavLink>
          </li>
          <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
            <NavLink
              to="/myToys"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#383838]"
              }
            >
              My Toys
            </NavLink>
          </li>
          <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
            <NavLink
              to="/addToys"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#383838]"
              }
            >
              Add Toys
            </NavLink>
          </li>
          <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#383838]"
              }
            >
              About us
            </NavLink>
          </li>
          <li className="lg:p-4 py-1 ps-3 font-semibold text-xl">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "active" : "text-[#383838]"
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-4 items-center justify-center">
          {user ? (
            <div className="flex gap-4 items-center">
              <Link
                className="text-4xl"
                title={user.displayName}
                to="userdetails"
              >
                {user.photoURL ? (
                  <img
                    className="w-10 mask mask-circle"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-10 mask mask-circle"
                    src="https://i.ibb.co/9HpR0yB/Nice-Png-user-icon-png-1280406.png"
                  />
                )}
              </Link>
              <button
                onClick={handleLogOut}
                className="my-btn btn-color hover:text-gray-800"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="my-btn btn-color hover:text-gray-800 mr-4">
                  Login
                </button>
              </Link>
              <Link to="/signUp">
                <button className="my-btn btn-color hover:text-gray-800">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
