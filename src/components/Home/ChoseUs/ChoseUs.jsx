import React from "react";
import {
  FaCar,
  FaDownload,
  FaPhone,
  FaShippingFast,
} from "react-icons/fa";

const ChoseUs = () => {
  return (
    <div className="lg:px-36 px-2">
      <div className="text-center">
        <h1 className="lg:text-5xl my-10 font-bold text-3xl text-color">
          Why you Choose us?
        </h1>
      </div>
      <div className="grid lg:grid-cols-2  gap-4 lg:gap-16">
        <div data-aos="zoom-in-right" data-aos-duration="1000" className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center shadow-lg hover:shadow-2xl background-color rounded-xl lg:p-20 p-4 font-bold">
          <FaShippingFast className="text-5xl mx-auto w-40 h-40" />
          <div className=" mx-auto">
            <h1 className="my-3 font-bold text-xl">FAST SHIPPING</h1>
            <h1>Expedited delivery of goods in a short time frame, allowing items to reach their destination quickly and efficiently.</h1>
          </div>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="1000" className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center shadow-lg hover:shadow-2xl background-color rounded-xl lg:p-20 p-4 font-bold">
          <FaDownload className="text-5xl mx-auto w-40 h-40"  />
          <div className=" mx-auto">
            <h1 className="my-3 font-bold text-xl">ONLINE PAYMENT</h1>
            <h1>Secure and convenient electronic transfer of funds for online purchases, eliminating the need for physical currency or checks.</h1>
          </div>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1000" className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center shadow-lg hover:shadow-2xl background-color rounded-xl lg:p-20 p-4 font-bold">
          <FaPhone className="text-5xl mx-auto w-40 h-40"  />
          <div className=" mx-auto">
            <h1 className="my-3 font-bold text-xl">24/7 SUPPORT</h1>
            <h1>Always-available assistance and customer service, providing timely help and solutions around the clock for customer satisfaction.</h1>
          </div>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="1000" className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center shadow-lg hover:shadow-2xl background-color rounded-xl lg:p-20 p-4 font-bold">
          <FaCar className="text-5xl mx-auto w-40 h-40"  />
          <div className=" mx-auto">
            <h1 className="my-3 font-bold text-xl">ONTIME DELIVERY</h1>
            <h1>Reliable and punctual shipping or service that ensures items or tasks are completed within the specified time frame.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
