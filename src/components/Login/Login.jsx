import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const [error, setError]= useState("");
    const { userLogin } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        if (!email) {
            setError('Email is required.')
        } else if (!password){
            setError('Password is required.')
        } else {
            setError('');
        }
        userLogin(email, password)
        .then(result => {
            console.log(result.user)
            toast('Login successful')
        })
        .catch(error => {
            console.log(error.message)
            setError("wrong email or password")
        })
    }

  return (
    <div className=" py-10 bg-base-200">
      <div className="lg:w-[700px] w-full mx-auto">
        <div className="">
          <form onSubmit={handleLogin} className="background-color p-20 rounded-lg shadow-2xl">
            <div className="font-extrabold text-center text-3xl lg:text-4xl mb-10">
              <h2>Login Now</h2>
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
            <p className="text-red-600 mt-2">{error}</p>
            <div className="mt-4 text-center">
              <button className="my-btn btn-color lg:w-full hover:text-gray-800">
                Login
              </button>
              <h2 className="font-bold mt-5">
                New to car galaxy?{" "}
                <Link to="/signUp" className="text-color">
                  Sign up
                </Link>
              </h2>
            </div>
          </form>
        </div>
        <div className="mx-auto p-10">
            <Lottie
              className="object-cover"
              animationData={login}
              loop={true}
            />
          </div>
          <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
