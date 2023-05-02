import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-16 p-10 bg-gray-900 text-gray-100">
        <div>
          <h2 className="font-bold text-3xl">KitchenCanvas</h2>
          <p>Providing reliable service since 2010</p>
          <img src="/src/assets/Icons/footer.png" alt="" />
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Product</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">
            28/F, 1 Peking Road, <br></br>Tsim Sha Tsui, <br></br> Kowloon, Hong
            Kong
          </a>
          <a className="link link-hover">(852) 3428 8342</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
