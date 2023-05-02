import React from "react";
import { Link } from "react-router-dom";
import google from "../../../public/google-logos-idvNIQR3p7.svg";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container mx-auto">
      <form className="bg-white p-10 lg:p-14  border-2 rounded-lg w-2/3 lg:w-2/5 mx-auto mt-16">
        <h1 className="text-xl md:text-2xl font-bold leading-tight mb-5">
          Log in to your account
        </h1>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>

          <div>
            <Link className="underline text-amber-500">Forgot Password?</Link>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-amber-500 focus:outline-none font-medium rounded-lg text-sm w-full block py-2.5"
          >
            Login
          </button>
          <div className="mt-4">
            <p>
              Don’t have an account?
              <Link to="/register" className="underline ml-2 text-amber-500">
                Create an account
              </Link>
            </p>
          </div>
        </div>

        <div
          className="w-full 
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <div className="flex gap-2 items-center">
              <hr className="my-9 border-gray-300 w-1/2" />
              <p>Or</p>
              <hr className="my-9 border-gray-300 w-1/2" />
            </div>
            <button
              type="button"
              className="w-full mb-5 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center">
                <img className="w-[25px]" src={google} alt="" />
                <span className="ml-4 text-center">Continue with Google</span>
              </div>
            </button>
            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center">
                <FaGithub className="text-2xl text-black"></FaGithub>
                <span className="ml-4 text-center">Continue with GitHub</span>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
