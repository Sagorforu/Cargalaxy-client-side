import React from "react";

const UpdateToys = () => {
    


  return (
    <div className="background-color my-10 py-20">
      <div className="font-extrabold text-center text-3xl lg:text-4xl mb-10">
        <h2>Update Your Toy</h2>
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
            value="Update Toys"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateToys;
