import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { _id, Picture, toyName, price, rating, subcategory } = toy || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {Picture ? (
        <figure>
          <img
            src={Picture}
            alt="toy car"
            className="p-5 w-96 pt-5 h-96 rounded-xl"
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
        <p className="font-bold">Rating: {rating}</p><Rating style={{ maxWidth: 110 }} value={rating} readOnly />
        </div>
        <Link to={`/singleToy/${_id}`}>
          <button className="my-btn btn-color my-8">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Toy;
