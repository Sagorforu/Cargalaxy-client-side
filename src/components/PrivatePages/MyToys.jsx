import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const MyToys = () => {
  const [allToys, setAllToys] = useState([]);
  const { user  } = useContext(AuthContext);
  useTitle("MyToys")

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [user]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#01cec4",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/singleToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              const remaining = allToys.filter((toys) => toys._id !== id);
              setAllToys(remaining);
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleLowToHigh = () =>{
    fetch(`http://localhost:5000/lowToHigh/${user?.email}?value=${value}&type=${type}`)
    .then(res => res.json())
    .then(data => setAllToys(data))
  }

  return (
    <div className="lg:px-36 px-2 my-10">
      <div className="text-center">
        <h1 className="lg:text-5xl font-bold text-3xl text-color">
          My Toys Collection
        </h1>
      </div>
      <div className="flex items-center justify-end mt-10 font-bold mr-16">
        <label  className="mr-2">
          Sort by Price:
        </label>
        <select id="sort-price" className="px-4 py-2 border rounded">
          <option onClick={handleLowToHigh} value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      {/* <select className="select w-full max-w-xs">
        <option  selected>
          Sort By Price
        </option>
        <option>Highest to Lowest</option>
        <option>Lowest to Highest</option>
      </select> */}
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
              <th>Update</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          {allToys.map((toys, index) => (
            <tbody key={toys._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{toys.sellerName}</td>
                <td className="text-color mt-3 font-bold">{toys.toyName}</td>
                <td>{toys.subcategory}</td>
                <td className="text-color mt-3 font-bold">$ {toys.price}</td>
                <td>{toys.quantity}</td>
                <td>
                  <Link to={`/updateToy/${toys._id}`}>
                    <button className="my-btn btn-color">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toys._id)}
                    className="my-btn btn-color"
                  >
                    <FaTrash />
                  </button>
                </td>
                <td>
                  <Link to={`/singleToy/${toys._id}`}>
                    <button className="my-btn btn-color">Details</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MyToys;
