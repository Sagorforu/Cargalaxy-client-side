import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddToys = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const photo = form.photo.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toyData = {
      toyName: toyName,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      Picture: photo,
      price: price,
      rating: rating,
      quantity: quantity,
      description: description,
      subcategory: selectedValue,
    };
    fetch('https://car-galaxy-server.vercel.app/addToy', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(toyData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        toast('Toy added successfully')
        form.reset();
    })
  };

  return (
    <div className="background-color my-10 py-20">
      <div className="font-extrabold text-center text-3xl lg:text-4xl mb-10">
        <h2>Add New Toy</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="lg:px-36 px-2">
          <div className="lg:flex justify-around text-center">
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Toy Name</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="toyName"
                placeholder="Toy name"
              />
            </div>
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Seller Name</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="sellerName"
                placeholder="Seller name"
              />
            </div>
          </div>
          <div className="lg:flex justify-around text-center">
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Toy Photo URL</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="photo"
                placeholder="Toy photo URL"
              />
            </div>
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Seller Email</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="email"
                name="sellerEmail"
                placeholder="Seller Email"
              />
            </div>
          </div>
          <div className="lg:flex justify-around text-center">
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Toy Price</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="price"
                placeholder="Toy price"
              />
            </div>
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Ratings</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="rating"
                placeholder="Ratings"
              />
            </div>
          </div>
          <div className="lg:flex justify-around text-center">
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Available Quantity</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="quantity"
                placeholder="Available Quantity"
              />
            </div>
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Category</h2>
              <select
                onChange={(event) => setSelectedValue(event.target.value)}
                className=" px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
              >
                <option value="">Select Category</option>
                <option value="truck ">Truck</option>
                <option value="policeCar">Police Car</option>
                <option value="stylishCar">Stylish Car</option>
              </select>
            </div>
          </div>
          <div className="mb-3 text-center">
            <h2 className="font-medium text-lg mb-2 text-center">
              Description
            </h2>
            <input
              className="px-3 pb-60 pt-2 lg:w-[520px] w-[300px] rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="text-center">
          <input
            className="my-btn btn-color w-[300px] lg:w-[520px] mt-3 lg:mt-6 "
            type="submit"
            value="Add Toys"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default AddToys;
