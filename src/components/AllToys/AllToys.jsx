import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2';
const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("https://car-galaxy-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this toy.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    });
    if (proceed) {
      fetch(`https://car-galaxy-server.vercel.app/singleToy/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = allToys.filter(toys => toys._id !== id);
          setAllToys(remaining);
          toast('Deleted Successful');
        }
      })
    }
  }

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
                <td className="text-color font-bold">{toys.toyName}</td>
                <td>{toys.subcategory}</td>
                <td className="text-color font-bold">$ {toys.price}</td>
                <td>{toys.quantity}</td>
                <td>
                  <button className="my-btn btn-color">
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(toys._id)} className="my-btn btn-color">
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

export default AllToys;
