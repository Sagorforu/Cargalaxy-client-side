import React, { useEffect, useState } from "react";

const GallerySection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("galleryPic.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="my-12 lg:px-36 px-2">
      <div className="text-center">
        <h1 className="lg:text-5xl font-bold text-3xl text-color">
          Gallery Section
        </h1>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-between gap-4 pt-10 ">
        {images.map((image) => (
          <div key={image.id} className="card lg:w-60 w-40 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={ image.image}
                alt="Shoes"
                className="rounded-xl lg:w-40 w-32 lg:h-40 h-32 p-3"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
