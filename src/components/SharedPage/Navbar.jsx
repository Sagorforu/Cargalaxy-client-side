import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="py-5 lg:flex items-center justify-between lg:px-36 px-2">
        <Link to="/">
          <h2 className="active font-bold text-3xl lg:text-5xl">
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
          {user ? (
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
          ) : (
            ""
          )}
          {user ? (
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
          ) : (
            ""
          )}
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
              <Link className="text-4xl">
                {user.photoURL ? (
                  <div className="tooltip" data-tip={user.displayName}>
                    <img
                      className="w-10 mask mask-circle tooltip"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
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
