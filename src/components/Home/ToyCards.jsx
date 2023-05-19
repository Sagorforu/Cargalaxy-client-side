import React, { useEffect, useState } from "react";
import ToyCard from "./toyCard";

const ToyCards = () => {
  const [toys, setToys] = useState([]);
  console.log(toys)

  useEffect(() => {
    fetch("https://car-galaxy-server.vercel.app/allCards")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
       <div className="text-center">
        <h1 className="lg:text-5xl font-bold text-3xl text-color">
          Our Best Toys
        </h1>
      </div>
      <div>
        {
            toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
        }
      </div>
    </div>
  );
};

export default ToyCards;
