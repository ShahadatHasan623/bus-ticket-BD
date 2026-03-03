import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
      <footer className="flex md:flex-row flex-col justify-between gap-5 w-full ">
        <div>
          <h1 className="footer-title">Bus-Ticketing System</h1>
          <p>Book your bus tickets easily and securely <br /> with our system. Check schedules,<br />  choose seats, and travel stress-free.</p>
        </div>

        <div className="flex flex-col">
          <h1 className="footer-title">Company</h1>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </div>
        <div className="flex flex-col">
          <h1 className="footer-title">Services</h1>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </div>
        <div className="flex flex-col">
          <h1 className="footer-title">Information</h1>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </div>
        <div className="flex flex-col">
          <h1 className="footer-title">Social Links</h1>
          <a className="link link-hover flex items-center gap-1"><FaFacebook /> Facebook</a>
          <a className="link link-hover flex items-center gap-1"><FaTwitter /> Twitter</a>
          <a className="link link-hover flex items-center gap-1"><FaInstagramSquare /> Instagram</a>
        </div>
      </footer>
      <div className="text-center mt-8 border-t-1 p-2  border-gray-400">
         <p>Copyright &copy; {new Date().getFullYear()} - All right reserved by Bus Ticket Bd</p>
      </div>
    </div>
  );
};

export default Footer;
