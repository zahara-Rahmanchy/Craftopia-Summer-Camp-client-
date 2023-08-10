import React, {useContext} from "react";
import {Rotate, Slide, Zoom} from "react-awesome-reveal";
import {FaCircle} from "react-icons/fa";
import {ThemeContext} from "../../Provider/ThemeProvider";

const FacilitiesSchedule = () => {
  const {theme} = useContext(ThemeContext);
  const textColorClass =
    theme === "light"
      ? "text-teal-600 bg-green-50"
      : "text-teal-400  bg-teal-950";
  return (
    <div className="p-10 ">
      <div
        className={`max-w-7xl mx-auto py-10 
        bg-slate-800"
        }`}
      >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 bg-slate-800 text-teal-400  border-4">
          <div className="m-3 p-5">
            <Slide>
              {" "}
              <p
                className={`text-xl font-semibold  italic bg-slate-800 text-orange-100 p-5`}
              >
                Craftopia Summer Camp offers a wide range of facilities and an
                exciting schedule to create an unforgettable experience for
                campers.
              </p>
            </Slide>
            {/* <Rotate> */}{" "}
            <img
              src="https://images.unsplash.com/photo-1614113036347-9f60df80730a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1197&q=80"
              className="rounded-s-full w-4/5 mt-6"
            ></img>
            {/* </Rotate> */}
          </div>
          <div className="p-10">
            <Slide>
              <p
                className={`text-xl font-semibold text-center  italic bg-slate-800 text-orange-300`}
              >
                Our engaging daily schedule at a glance.
              </p>
            </Slide>
            <p className="text-lg font-semibold text-orange-400 italic mt-3">
              Morning:
            </p>
            <ol
              className={`text-md font-semibold italic my-3 ms-4 bg-slate-800 text-teal-400`}
            >
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Breakfast
                </li>
              </Zoom>
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Team-building exercises and icebreaker games
                </li>
              </Zoom>
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Outdoor sports and recreational activities (e.g., soccer,
                  basketball, capture the flag)
                </li>
              </Zoom>
            </ol>
            <p className="text-lg font-semibold text-orange-400 my-2">
              {" "}
              Afternoon:
            </p>
            <ol
              className={`text-md font-semibold italic my-3 ms-4 bg-slate-800 text-teal-400`}
            >
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Specialty workshops and skill-building sessions (e.g., arts
                  and craft)
                </li>
              </Zoom>
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Adventure activities (e.g., hiking, canoeing, archery)
                </li>
              </Zoom>
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Swimming and water games
                </li>
              </Zoom>
            </ol>
            <p className="text-lg font-semibold text-orange-400 my-2">
              {" "}
              Evening:{" "}
            </p>
            <ol
              className={`text-md font-semibold italic my-3 ms-4 bg-slate-800 text-teal-400`}
            >
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Evening snack
                </li>
              </Zoom>

              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Campfire and storytelling
                </li>
              </Zoom>

              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Group games and challenges
                </li>
              </Zoom>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSchedule;
