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
          Our Toys Gallery
        </h1>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-between gap-1 pt-10 ">
        {images.map((image) => (
          <div
            key={image.id}
            className="card lg:w-60 w-44 bg-base-100 shadow-lg hover:shadow-2xl"
          >
            <figure
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="px-10 pt-10"
            >
              <img
                src={image.image}
                alt=""
                className="rounded-xl w-40 h-40 p-3"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
