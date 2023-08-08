import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="max-w-7xl bg-white mx-auto grid grid-cols-5 my-20">
      <div className="col-span-2 p-10 w-full">
        <h1 className="text-7xl font-bold text-orange-400 mb-8">
          Campers' Stories:
        </h1>
        <span className="text-4xl text-gray-700 font-semibold">
          Hear What They Loved
        </span>
      </div>
      <div
        className="col-span-3 bg-[#F9F9F7]"
        // style={{backgroundImage: `url(${msg.picture})`, height: "300px"}}
      >
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
                <div className="absolute inset-0 bg-orange-400 opacity-20 z-4 flex flex-col justify-center items-center z-5"></div>
                <p className="text-3xl font-semibold">{msg.name}</p>
                <p className="text-xl w-1/2 text-center mx-auto p-10 mt-4 text-white">
                  {msg.testimonial}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    // </div>
  );
};

export default Reviews;
