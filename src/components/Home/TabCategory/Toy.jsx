import { Rating } from "@smastrom/react-rating";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Toy = ({ toy }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { _id, Picture, toyName, price, rating, subcategory } = toy || {};
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="1000"
      className="card lg:w-96 w-80 bg-base-100 shadow-lg hover:shadow-2xl"
    >
      {Picture ? (
        <figure>
          <img
            src={Picture}
            alt="toy car"
            className="p-5 lg:w-96 w-80 pt-5 h-80 lg:h-96 rounded-xl"
          />
        </figure>
      ) : (
        <p>Picture not available</p>
      )}
      <div className="card-body text-left">
        <h2 className="font-bold text-2xl">
          {toyName}
          <div className="badge badge-secondary btn-color p-2 ml-2">
            {subcategory}
          </div>
        </h2>
        <p className="font-bold">Price: ${price}</p>
        <div className="flex items-center justify-center">
          <p className="font-bold">Rating: {rating}</p>
          <Rating style={{ maxWidth: 110 }} value={rating} readOnly />
        </div>
        <Link className="shadow-lg text-center rounded-lg" to={`/singleToy/${_id}`}>
          <button className="my-btn btn-color my-8 shadow-lg hover:shadow-xl">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Toy;
