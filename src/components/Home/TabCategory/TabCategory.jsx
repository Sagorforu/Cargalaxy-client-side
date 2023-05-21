import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import "react-table-6/react-table.css";
import Toy from "./Toy";

const TabCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        const cateGoryByFilter = data?.filter(
          (toy) => toy.subcategory == activeTab
        );
        setToys(cateGoryByFilter);
      });
  }, [activeTab]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-16 lg:px-36 px-2">
      <div className="text-center">
        <h1 className="lg:text-5xl font-bold text-3xl text-color">
          Our Best Toys
        </h1>
      </div>
      <div className="text-center mt-12 text-2xl font-bold">
        Filter By Category
      </div>
      <div className="text-center my-10">
        <div className="text-center ">
          <button
            onClick={() => handleTab("truck")}
            className={`${
              activeTab == "truck"
                ? "toy-btn mx-4 mb-5 btn-color shadow-lg hover:shadow-xl"
                : "mx-4 my-btn btn-color shadow-lg hover:shadow-xl"
            }`}
          >
            Truck
          </button>
          <button
            onClick={() => handleTab("policeCar")}
            className={`${
              activeTab == "policeCar"
                ? "toy-btn mx-4 mb-5 btn-color shadow-lg hover:shadow-xl"
                : "mx-4 my-btn btn-color shadow-lg hover:shadow-xl"
            }`}
          >
            Police
          </button>
          <button
            onClick={() => handleTab("stylishCar")}
            className={`${
              activeTab == "stylishCar"
                ? "toy-btn mx-4 mb-5 btn-color shadow-lg hover:shadow-xl"
                : "mx-4 my-btn btn-color shadow-lg hover:shadow-xl"
            }`}
          >
            Stylish
          </button>
          <div className="grid lg:grid-cols-3 lg:gap-8 gap-3 items-center justify-center mt-10">
            {toys.map((toy) => (
              <Toy key={toy._id} toy={toy}></Toy>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCategory;
