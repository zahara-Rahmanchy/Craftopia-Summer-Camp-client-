import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Fade, Slide} from "react-awesome-reveal";
const HomeSlider = () => {
  const settings = {
    respondTo: "slider",

    dots: true,
    dotsClass: "slick-dots bottom-0", // Position dots at the bottom
    arrows: true, // Show arrow controls
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    fade: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed (in milliseconds)
    cssEase: "ease-in",
  };
  return (
    <div className="w-full m-0 px-0 overflow-hidden bg-blue h-full  ">
      <Slider {...settings}>
        <div className="lg:h-[600px]">
          {/* <img
            src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="object-cover w-full h-[600px]"
          />
          */}
          <div
            className="hero z-10 lg:h-[600px]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  bg-black opacity-50"></div>

            <div className=" md:hero-content text-center text-neutral-content w-full h-fit">
              {/* <Slide> */}{" "}
              <div className=" h-full w-full  bg-opacity-80  p-3">
                <Slide direction="down" duration={5000}>
                  <h1 className="mb-5 md:text-9xl text-5xl mt-20 font-extrabold italic text-lime-300 border-0 ">
                    Summer Camp!
                  </h1>
                </Slide>
                <Slide direction="down" duration={3000}>
                  <p className="text-orange-400 md:text-3xl font-semibold text-lg ">
                    Express Yourself Through Art & Crafts
                  </p>

                  <p className="md:mb-5 md:mt-3 text-center  w-1/2 mx-auto text-white md:text-xl text-sm font-semibold ">
                    {" "}
                    Ignite imagination through colorful possibilities, hands-on
                    activities, and artistic adventures. Nurture young artists
                    and craft enthusiasts in an inspiring environment. Join us
                    for an exciting journey of creativity and growth.
                  </p>
                </Slide>
              </div>
              {/* </Slide> */}
            </div>
          </div>
        </div>

        <div className="lg:h-[600px] h-[300px]">
          {/* <img
            src="https://i.ibb.co/YZkyXgc/pexels-photo-6966372.jpg"
            className="object-cover w-full h-[600px]"
          /> */}

          <div
            className="hero z-10 lg:h-[600px]  h-full"
            style={{
              backgroundImage: `url("https://i.ibb.co/YZkyXgc/pexels-photo-6966372.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  bg-black opacity-50"></div>
            <div className=" text-center text-neutral-content ">
              <div className=" h-1/3 w-full  bg-opacity-80  p-3 ">
                <Slide direction="left" duration={3000}>
                  {" "}
                  <h1 className="mb-5 md:text-7xl text-3xl md:w-3/4 mx-auto  mt-20 font-bold italic text-lime-300 border-0 ">
                    Make Art, Make Friends, Make Memories
                  </h1>
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[600px] h-[300px]">
          <div
            className="hero z-10 lg:h-[600px] h-full"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=807&q=80")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  bg-black opacity-50"></div>
            <div className=" h-1/3 w-full  bg-opacity-80  p-3 ">
              <Slide direction="down" duration={3000}>
                <h1 className="mb-5 md:text-7xl text-3xl text-center mx-auto md:w-1/2 w-full font-bold italic text-lime-300 border-0 ">
                  Let your Creativity Shine!
                </h1>
              </Slide>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
