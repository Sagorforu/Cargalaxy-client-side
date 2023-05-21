import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="footer py-4 lg:px-36 px-2 border-t bg-base-200 text-base-content border-base-300 rounded-lg ">
        <div className="items-center grid-flow-col">
          <Link to="/">
            <h2 className="active font-bold text-3xl lg:text-5xl">
              Car<span className="active">Galaxy</span>
            </h2>
          </Link>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link
              target="blank"
              to="https://twitter.com/Sagor4you"
              className="font-bold text-2xl"
            >
              <FaTwitter />
            </Link>
            <Link
              target="blank"
              to="https://www.instagram.com/sagorforu/"
              className="font-bold text-2xl"
            >
              <FaInstagram />
            </Link>
            <Link
              target="blank"
              to="https://www.facebook.com/mdsagor.uddin.12"
              className="font-bold text-2xl"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </footer>
      <footer className="footer p-10 rounded-lg lg:px-36 px-2 bg-teal-100 text-base-content">
        <div className="font-bold text-gray-700">
          <span className="footer-title  font-extrabold text-xl">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div className="font-bold text-gray-700">
          <span className="footer-title  font-extrabold text-xl">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div className="font-bold text-gray-700">
          <span className="footer-title font-extrabold text-xl">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
