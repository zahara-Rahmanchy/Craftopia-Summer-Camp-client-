import React from "react";
import {Slide} from "react-awesome-reveal";
import {FaFacebook, FaPhone, FaWhatsappSquare} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <footer className="footer overflow-hidden md:p-5 flex flex-col justify-center items-center bottom-0  bg-slate-900">
        <div className="divider w-3/4 mx-auto bg-orange-200 h-[2px]"></div>
        <Slide>
          {" "}
          <a className=" capitalize btn btn-ghost font-bold md:text-3xl text-orange-300 italic text-2xl">
            Craftopia
          </a>
          <div className="flex md:flex-row flex-col md:space-x-4 text-lg text-teal-500">
            <a>Contacts</a>
            <a>Home</a>
            <a>About Us</a>
            <a>Classes</a>
            <a>Instructors</a>
          </div>
          <p className="flex items-center">
            <FaPhone className="me-1 text-orange-600 text-xl" />
            <span className="text-lg  font-semibold text-teal-500">
              Call Us On: +64 9 1234 5678{" "}
            </span>
          </p>
          <div>
            <p className="text-lg font-semibold text-teal-500">
              Our Socail Sites. Do visit to know more!
            </p>
            <div className="grid grid-flow-col gap-4 place-content-center align-middle mt-2  mx-auto">
              <a>
                <FiInstagram className="text-3xl  text-orange-300" />
              </a>
              <a></a>
              <FaFacebook className="text-3xl text-orange-300" />

              <a className="text-3xl text-orange-300">
                <FaWhatsappSquare />
              </a>
            </div>
          </div>
        </Slide>
        <div className="divider w-3/4 mx-auto bg-orange-200 h-[2px]"></div>
      </footer>
    </>
  );
};

export default Footer;
