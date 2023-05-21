import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signUp from "../../assets/signUp.json";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hook/useTitle";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, googleUser, updateProfileInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("SignUp");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!email) {
      setError("Email is required.");
      return;
    } else if (!password) {
      setError("Password is required.");
      return;
    } else {
      setError("");
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          console.log(result.user);
          toast("SignUp successful");
          navigate("/");
          updateProfileInfo(name, photo).then(() => {
            toast("Profile info updated");
          });
        }
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        toast("SignUp failed, please try again");
      });
  };

  const handleGoogle = () => {
    googleUser()
      .then((result) => {
        console.log(result.user);
        toast("SignUp successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast("SignUp failed, please try again");
      });
  };

  return (
    <div className=" lg:px-36 px-2 py-10 bg-base-200">
      <div >
        <div className="grid lg:grid-cols-2">
          <div className="lg:w-[700px] w-full mx-auto">
            <form
              onSubmit={handleSignUp}
              className="background-color p-10 mx-auto lg:p-20 rounded-lg shadow-2xl"
            >
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
              <p className="text-red-600 mt-2">{error}</p>
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
                <button onClick={handleGoogle} className="mt-10">
                  <img
                    className="mx-auto shadow-2xl"
                    src="https://i.ibb.co/tB24MCG/google.png"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="mx-auto p-10">
            <Lottie
              className="object-cover"
              animationData={signUp}
              loop={true}
            />
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
