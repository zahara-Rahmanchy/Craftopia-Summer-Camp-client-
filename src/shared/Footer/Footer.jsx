import React from "react";
import {Slide} from "react-awesome-reveal";
import {FaFacebook, FaPhone, FaWhatsappSquare} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 flex flex-col justify-center items-center bottom-0  bg-gradient-to-r from-teal-700 via-green-300 to-orange-200 ">
        <div className="divider w-3/4 mx-auto bg-orange-200 h-[2px]"></div>
        <Slide>
          {" "}
          <a className="btn btn-ghost font-bold md:text-3xl text-teal-700 text-2xl">
            Craftopia
          </a>
          <div className="flex space-x-4 text-lg">
            {" "}
            <a>Contacts</a>
            <a>Home</a>
            <a>About Us</a>
            <a>Classes</a>
            <a>Instructors</a>
          </div>
          <p className="flex items-center">
            <FaPhone className="me-1 text-orange-600 text-xl" />
            <span className="text-lg  font-semibold">
              Call Us On: +64 9 1234 5678{" "}
            </span>
          </p>
          <div>
            <p className="text-lg font-semibold">
              Our Socail Sites. Do visit to know more!
            </p>
            <div className="grid grid-flow-col gap-4 place-items-center  mx-auto">
              <a>
                <FiInstagram className="text-3xl  text-teal-700" />
              </a>
              <a></a>
              <FaFacebook className="text-3xl text-white" />

              <a className="text-3xl text-teal-700">
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
