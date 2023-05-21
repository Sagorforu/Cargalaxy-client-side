import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { ColorRing } from "react-loader-spinner";
import useTitle from "../../hook/useTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loading } = useContext(AuthContext);
  useTitle("AllToys")

  useEffect(() => {
    fetch("https://car-galaxy-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  const handleSearch = () => {
    fetch(`https://car-galaxy-server.vercel.app/searchByToyName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div className="lg:px-36 px-2 my-10">
      <div className="text-center">
        <h1 className="lg:text-5xl font-bold text-3xl text-color">
          Our All Toys Collection
        </h1>
      </div>
      <div className="mt-10 mb-4 text-center background-color py-20 rounded-lg">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="px-3 py-4 shadow-xl lg:w-[520px] w-[350px] rounded-lg"
          type="text"
          name="sellerName"
          placeholder="Search here"
        />{" "}
        <br />
        <button
          onClick={handleSearch}
          className="my-btn btn-color shadow-xl mt-5"
        >
          Search
        </button>
      </div>
      <div>
        <table className="table w-full mb-10 overflow-y-scroll">
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
          {allToys.map((toys, index) => (
            <tbody key={toys._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{toys.sellerName}</td>
                <td className="text-color font-bold mt-2">{toys.toyName}</td>
                <td>{toys.subcategory}</td>
                <td className="text-color font-bold mt-2">$ {toys.price}</td>
                <td>{toys.quantity}</td>
                <td>
                  <Link to={`/singleToy/${toys._id}`}>
                    <button className="my-btn btn-color">Details</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
