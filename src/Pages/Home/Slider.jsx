import {Fade, Slide} from "react-awesome-reveal";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    animation="fade"
    transitionDelay={1000}
  >
    <div
      className="hero h-full z-10"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0  bg-black opacity-50"></div>

      <div className=" md:hero-content text-center text-neutral-content w-full h-fit">
        <Slide>
          {" "}
          <div className=" h-full w-full bg-teal-700  bg-opacity-80 hero-overlay p-3">
            <h1 className="mb-5 md:text-8xl text-5xl font-extrabold italic text-lime-400 border-0 ">
              Summer Camp!
            </h1>
            <p className="text-orange-400 md:text-3xl font-semibold text-lg ">
              Express Yourself Through Art & Crafts
            </p>

            <Fade>
              {" "}
              <p className="md:mb-5 md:mt-3 text-white md:text-xl text-sm font-semibold ">
                Ignite imagination through colorful possibilities, hands-on
                activities, and artistic adventures. Nurture young artists and
                craft enthusiasts in an inspiring environment. Join us for an
                exciting journey of creativity and growth.
              </p>
            </Fade>
          </div>
        </Slide>
      </div>
    </div>
    <div
      className="hero h-full  z-10 "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=807&q=80")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="bg-teal-900 bg-opacity-60 hero-overlay"></div> */}
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <Slide>
            <h1 className="mb-5 md:text-6xl font-bold  text-lime-300 text-2xl bg-teal-800 p-3 bg-opacity-25">
              Let Your Creativity Shine
            </h1>
          </Slide>
        </div>
      </div>
    </div>
    <div
      className="hero h-full  z-10"
      style={{
        backgroundImage: `url("https://i.ibb.co/YZkyXgc/pexels-photo-6966372.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="bg-blue-900 bg-opacity-30 hero-overlay"></div> */}
      <div className=" text-center text-neutral-content ">
        <div className="max-w-md">
          <Slide>
            {" "}
            <h1 className="mb-5 md:text-6xl font-bold text-lime-400  text-2xl bg-teal-800 p-3 bg-opacity-80 w-full">
              Make Art, Make Friends, Make Memories
            </h1>
          </Slide>
        </div>
      </div>
    </div>
  </AutoplaySlider>
);

const Slider = () => {
  return <>{slider}</>;
};

export default Slider;
