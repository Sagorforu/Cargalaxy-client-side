import React from "react";
import { useForm } from "react-hook-form";

const AddToys = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const handleSubmit = event => {
    console.log('form hitted')
  }


  return (
    <form
      className="background-color my-10 py-20"
      onSubmit={handleSubmit}
    >
      <div className="font-extrabold text-center text-3xl lg:text-4xl mb-10">
        <h2>Add New Toy</h2>
      </div>
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
              name="Photo"
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
              className="px-3 py-4 lg:w-[520px] w-[300px] rounded-lg"
              {...register("Title", { required: true })}
            >
              <option value="truck">Truck</option>
              <option value="policeCar">Police Car</option>
              <option value="stylishCar">Stylish Car</option>
            </select>
          </div>
        </div>
        <div className="mb-3 text-center">
          <h2 className="font-medium text-lg mb-2 text-center">Description</h2>
          <input
            className="px-3 pb-60 pt-2 lg:w-[520px] w-[300px] rounded-lg"
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
      </div>
      <div className="text-center">
        <button className="my-btn btn-color w-[300px] lg:w-[520px] mt-3 lg:mt-6 ">
          Add Toys
        </button>
      </div>
    </form>
  );
};
export default AddToys;
