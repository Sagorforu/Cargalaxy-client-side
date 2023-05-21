import React from "react";
import { ToastContainer } from "react-toastify";
import Lottie from "lottie-react";
import support from "../../../assets/support.json";


const ContactUs = () => {
  return (
    <div className="lg:px-36 px-2">
      <div className="text-center">
        <h1 className="lg:text-5xl my-10 font-bold text-3xl text-color">
          Contact us
        </h1>
      </div>
      <div className="background-color p-10 lg:p-20 grid lg:grid-cols-2 grid-cols-1 gap-5 rounded-lg shadow-2xl">
        <div className="mx-auto">
          <div className="font-extrabold text-2xl lg:text-3xl mb-10">
            <h2>Send your message</h2>
          </div>
          <div className="mb-2">
            <input
              className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
              type="text"
              name="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-2">
            <input
              className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
              type="text"
              name="name"
              placeholder="Your email"
            />
          </div>
          <div className="mb-3 text-center">
            <input
              className="px-3 pb-60 pt-2 lg:w-[520px] w-[300px] rounded-lg"
              type="text"
              name="description"
              placeholder="Your message here"
            />
          </div>
          <div className="text-center">
          <button className="my-btn btn-color lg:w-full hover:text-gray-800">
                Submit
              </button>
          </div>
        </div>
        <div>
        <div className="mx-auto lg:p-10">
          <Lottie className="object-cover" animationData={support} loop={true} />
        </div>
        <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
