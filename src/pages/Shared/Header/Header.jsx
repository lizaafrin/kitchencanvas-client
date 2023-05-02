import React from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import Banner from "../../Home/Banner";

const Header = () => {
  return (
    <div>
      <div className="navbar shadow-md bg-amber-500 px-10 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <p className="font-bold text-4xl">
            Kitchen<span className="text-red-800">Canvas</span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <Link to="/login">Login </Link>
        </div>

        <div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  <FaUserCircle className="text-2xl"></FaUserCircle>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Header;
