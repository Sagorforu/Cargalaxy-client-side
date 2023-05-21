import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTitle from "../../hook/useTitle";

const SingleToy = () => {
  const singleData = useLoaderData();
  useTitle("Toy Details")
  const {
    Picture,
    description,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    toyName,
  } = singleData;

  return (
    <div className="lg:px-36 px-2 my-10">
      <div className="text-center my-10">
        <h1 className="lg:text-5xl font-bold text-3xl text-color">
          Toy Information
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 items-center gap-4">
        <div className="shadow-lg hover:shadow-2xl rounded-xl mb-4">
          <img className="rounded-xl" src={Picture} alt="" />
        </div>
        <div className="mx-auto">
          <div className="shadow-lg hover:shadow-2xl p-12 py-20 rounded-xl background-color space-y-4">
            <h1 className="text-xl text-[#383838] font-semibold">
              Toy Name: {toyName}
            </h1>
            <h1 className="text-xl text-[#383838] font-semibold">
              Seller Name: {sellerName}
            </h1>
            <h1 className="text-xl text-[#383838] font-semibold">
              Seller Email: {sellerEmail}
            </h1>
          </div>
          <div className="shadow-lg hover:shadow-2xl p-12 py-20 mt-5 rounded-xl background-color space-y-4">
            <h1 className="text-xl text-[#383838] font-semibold">
              Price: ${price}
            </h1>
            <div className="flex gap-4">
              <h1 className="text-xl text-[#383838] font-semibold">
                Rating: {rating}
              </h1>{" "}
              <Rating style={{ maxWidth: 110 }} value={rating} readOnly />
            </div>
            <h1 className="text-xl text-[#383838] font-semibold">
              Quantity: {quantity}
            </h1>
          </div>
        </div>
      </div>
      <div className="my-6 shadow-lg hover:shadow-2xl p-10 rounded-xl background-color">
        <h1 className="lg:text-4xl text-[#383838] text-center font-bold text-3xl mb-4">
          Description
        </h1>
        <h1 className="font-semibold">{description}</h1>
      </div>
    </div>
  );
};

export default SingleToy;
