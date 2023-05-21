import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#011f1d] to-[#2cfff4] bg-cover bg-center">
      <div className="grid lg:grid-cols-2 items-center gap-10 lg:px-36 px-4">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="text-white text-center"
        >
          <div>
            <h1 className="text-3xl md:text-6xl text-start font-bold mb-6 font-mono">
              EXPLORE AND <br />{" "}
              <span className="font-mono">DISCOVER MORE</span> <br />{" "}
              <span className="text-[#01cec4] shadow-xl">AMAZING TOYS</span>
            </h1>
          </div>
          <div>
            <p className="text-lg md:text-xl text-start mb-4">
              Discover a wide range of toys for every interest and age group.
              From educational toys that foster learning and development.
            </p>
            <p className="text-lg md:text-xl text-start mb-8">
              At The Toy Shop, we bring joy and wonder to children of all ages.
            </p>
          </div>
          <Link to="/allToys">
            {" "}
            <button className="text-start toy-btn shadow-lg hover:shadow-xl btn-color flex items-center justify-center">
              <FaCartPlus className="text-2xl font-bold mr-2" /> BUY TOYS
            </button>
          </Link>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="1000">
          <img
            className="shadow-lg w-96 lg:w-full hover:shadow-xl"
            src="https://i.ibb.co/nzgfC0S/car8.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Headers;
