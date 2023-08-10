import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./camp.css";
function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, background: "teal", right: "10px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;

  return (
    <div
      className={className}
      style={{...style, background: "teal", left: "2px", zIndex: 10}}
      onClick={onClick}
    />
  );
}
const CampingTypes = () => {
  const [campData, setCampData] = useState([]);

  useEffect(() => {
    fetch("/camp.json")
      .then(res => res.json())
      .then(data => {
        setCampData(data);
      })
      .catch(error => console.log(error));
  }, []);
  const CustomArrow = ({direction, onClick}) => (
    <button onClick={onClick} className={`bg-teal-600`}></button>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    centerMode: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      {" "}
      <h2
        className="text-5xl font-semibold mb-2 text-center   mt-28 text-teal-700"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontVariationSettings: "'opsz' 14, 'wght' 400",
        }}
      >
        Explore Our Camps
      </h2>
      <hr class="border-t-4 border-orange-300 w-1/4 mx-auto" />
      <h3 className="text-center text-slate-700 text-3xl my-2 mb-10">
        Happy Camping!
      </h3>
      <div className="mx-auto  md:w-[90%] w-full overflow-hidden">
        <Slider {...settings}>
          {campData.map((msg, index) => (
            <div
              key={index}
              className="overflow-hidden h-[500px] w-full cursor-pointer bg-slate-950 bg-opacity-90 "
            >
              <div className=" card-body ">
                <img
                  src={msg.image}
                  className="w-full object-cover h-[200px] shadow-lg shadow-slate-800 m-0"
                  alt={msg.name}
                />
                {/* <div className="card-body"> */}{" "}
                <p className="text-2xl font-semibold z-50 text-orange-300">
                  {msg.name}
                </p>
                <p className="md:text-lg w-full   text-white font-semibold z-50">
                  {msg.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CampingTypes;
