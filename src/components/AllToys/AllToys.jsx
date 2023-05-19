import React, { useEffect, useState } from "react";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
  console.log(allToys)

  useEffect(() => {
    fetch("https://car-galaxy-server.vercel.app/allCards")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div className="lg:px-36 px-2 my-10">
      <div className="text-center">
        <h1 className="lg:text-5xl font-bold text-3xl text-color">
          Our All Toys Collection
        </h1>
      </div>
      <div>
      <table className="table w-full my-10">
          {/* head*/}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          {
            allToys.map((toys, index) => <tbody>
            <tr>
              <th>{index + 1}</th>
              <td>{toys.sellerName}</td>
              <td className="text-color font-bold">{toys.toyName}</td>
              <td>{toys.subcategory}</td>
              <td className="text-color font-bold">$ {toys.price}</td>
              <td>{toys.quantity}</td>
              <td><button className="my-btn btn-color">Details</button></td>
            </tr>
          </tbody>)
        }
        </table>
        
      </div>
    </div>
  );
};

export default AllToys;
