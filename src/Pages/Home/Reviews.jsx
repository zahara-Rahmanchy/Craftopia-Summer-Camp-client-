import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import reicon from "../../../public/animation_ll37ry8x.json";
// import {Player} from "@lottiefiles/react-lottie-player";
import {Slide} from "react-awesome-reveal";
const Reviews = () => {
  const [ReviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("/Creview.json")
      .then(res => res.json())
      .then(data => {
        setReviewData(data);
      })
      .catch(error => console.log(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    // <div className="h-[500px] flex items-center justify-center bg-white">
    <div className="max-w-7xl bg-blue-100 mx-auto grid md:grid-cols-5 grid-cols-1 my-20">
      <div className="md:col-span-2  w-full flex  flex-col items-start h-full justify-start border-teal-800 border-2">
        <Slide className="left" duration={2000}>
          <div
            className="flex flex-col justify-center p-10 h-full 
        "
          >
            {" "}
            <h1 className="text-7xl mt-20 font-bold text-orange-400 mb-8 md:w-1/2  border-b-slate-600 border-b-4">
              Campers' Stories:
            </h1>
            <span className="text-4xl text-teal-800 font-medium">
              Hear What They Loved
            </span>{" "}
          </div>
        </Slide>
      </div>
      <div className="md:col-span-3 bg-[#F9F9F7] overflow-hidden">
        <Slide direction="right">
          <Slider {...settings}>
            {ReviewData.map(msg => (
              <div
                key={msg._id}
                className=" text-center rounded-lg shadow-md  bg-green-100"
                //   style={{backgroundImage: `url(${msg.picture})`, height: "300px"}}
              >
                <div
                  className="h-full object-contain"
                  style={{
                    backgroundImage: `url(${msg.picture})`,
                    height: "500px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {" "}
                  <div className="absolute inset-0 bg-slate-900 opacity-20  z-5"></div>
                  <div className="flex flex-col justify-center items-center  h-full w-full ">
                    <p className="text-5xl font-semibold z-50 text-orange-300  ">
                      {msg.name}
                    </p>
                    <p className="text-xl md:w-1/2 text-center mx-auto p-10 mt-4 text-white font-semibold z-50 ">
                      {msg.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Slide>
        <div></div>
      </div>
    </div>
  );
};

export default Reviews;
