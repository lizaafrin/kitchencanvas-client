import React from "react";
import { FaCuttlefish, FaKickstarterK } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-16 p-10 bg-gray-900 text-gray-100">
        <div>
          <h2 className="font-bold text-3xl">KitchenCanvas</h2>
          <p>Providing reliable service since 2010</p>
          <div className="flex py-2 items-center">
            <FaKickstarterK className="ms-0 text-4xl text-green-500"></FaKickstarterK>
            <FaCuttlefish className="ms-0 text-4xl text-green-500"></FaCuttlefish>
          </div>
        </div>
        <div>
          <span className="footer-title">Catering</span>

          <a className="link link-hover">Corporate Events</a>

          <a className="link link-hover">Weddings And Galas</a>

          <a className="link link-hover">Special Events</a>

          <a className="link link-hover">Cooking Classes</a>
        </div>

        <div>
          <span className="footer-title">About us</span>

          <a className="link link-hover">Our Blog</a>

          <a className="link link-hover">Our Team</a>

          <a className="link link-hover">Shop</a>
        </div>

        <div>
          <span className="footer-title">What We Offer</span>

          <a className="link link-hover">Pricing</a>

          <a className="link link-hover">Testimonials</a>

          <a className="link link-hover">Baking School</a>

          <a className="link link-hover">Our Recipes</a>
        </div>

        <div>
          <span className="footer-title">Contact</span>

          <a className="link link-hover">
            G/F, 165 Temple Street, Jordan, Hong Kong
          </a>

          <a className="link link-hover">+ (0998) 282 44</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
