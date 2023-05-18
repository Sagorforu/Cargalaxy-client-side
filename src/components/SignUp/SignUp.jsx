import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import signUp from "../../assets/signUp.json";

const SignUp = () => {
  return (
    <div className=" py-10 bg-base-200">
      <div className="lg:w-[700px] w-full mx-auto">
        <div className="">
          <form className="background-color p-20 rounded-lg">
            <div className="font-extrabold text-center text-3xl lg:text-4xl mb-10">
              <h2>Sign up here</h2>
            </div>
            <div className="mb-8">
              <h2 className="font-medium text-lg mb-2">Your Name</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div className="mb-8">
              <h2 className="font-medium text-lg mb-2">Email</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg mb-2">Password</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="password"
                name="password"
                placeholder="Your password"
                required
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg mb-2">Photo URL</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="photo"
                placeholder="Your photo url"
              />
            </div>
            <div className="mt-4 text-center">
              <button className="my-btn btn-color lg:w-full hover:text-gray-800">
                Sign Up
              </button>
              <h2 className="font-bold mt-5">
                Already have an account?{" "}
                <Link to="/login" className="text-color">
                  login
                </Link>
              </h2>
              <div className="mt-10">
                <img className="mx-auto" src="https://i.ibb.co/tB24MCG/google.png" alt="" />
              </div>
            </div>
          </form>
        </div>
        <div className="mx-auto p-10">
          <Lottie className="object-cover" animationData={signUp} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
