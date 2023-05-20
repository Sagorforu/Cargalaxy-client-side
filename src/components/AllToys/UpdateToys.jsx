import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
    const [selectedValue, setSelectedValue] = useState("");
  const { user } = useContext(AuthContext);
  const toys = useLoaderData();
  const {
    _id,
    toyName,
    sellerName,
    Picture,
    description,
    price,
    quantity,
    rating,
    subCategory,
  } = toys;

  const handleUpdate = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const photo = form.photo.value;
    const sellerEmail = user?.email;
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
    // update toy
    fetch(`https://car-galaxy-server.vercel.app/singleToy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="background-color my-10 py-20">
      <div className="font-extrabold text-center text-3xl lg:text-4xl mb-10">
        <h2>Update {toys.toyName} Toy</h2>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="lg:px-36 px-2">
          <div className="lg:flex justify-around text-center">
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Toy Name</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="toyName"
                placeholder="Toy name"
                defaultValue={toyName}
              />
            </div>
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Seller Name</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="sellerName"
                placeholder="Seller name"
                defaultValue={sellerName}
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
                defaultValue={Picture}
              />
            </div>
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Seller Email</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="email"
                defaultValue={user?.email}
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
                defaultValue={price}
              />
            </div>
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Ratings</h2>
              <input
                className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
                type="text"
                name="rating"
                placeholder="Ratings"
                defaultValue={rating}
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
                defaultValue={quantity}
              />
            </div>
            <div className="mb-3">
              <h2 className="font-medium text-lg mb-2">Category</h2>
              <select
                onChange={(event) => setSelectedValue(event.target.value)}
                className=" px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
              >
                <option defaultValue={subCategory}>Select Category</option>
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
              defaultValue={description}
            />
          </div>
        </div>
        <div className="text-center">
          <input
            className="my-btn btn-color w-[300px] lg:w-[520px] mt-3 lg:mt-6 "
            type="submit"
            value="Update Toys"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateToys;
