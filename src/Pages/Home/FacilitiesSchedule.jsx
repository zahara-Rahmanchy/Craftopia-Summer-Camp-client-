import React from "react";
import {Rotate, Slide, Zoom} from "react-awesome-reveal";
import {FaCircle} from "react-icons/fa";

const FacilitiesSchedule = () => {
  return (
    <div className="bg-green-200 p-10 ">
      <div className="max-w-7xl mx-auto bg-green-100 py-10">
        <div className="grid grid-cols-2 gap-2">
          <div className="m-3">
            <Slide>
              {" "}
              <p className="text-xl font-semibold text-teal-700 italic">
                Craftopia Summer Camp offers a wide range of facilities and an
                exciting schedule to create an unforgettable experience for
                campers.
              </p>
            </Slide>
            <Rotate>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1614113036347-9f60df80730a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1197&q=80"
                className="rounded-s-full w-4/5 mt-6"
              ></img>
            </Rotate>
          </div>
          <div>
            <Slide>
              <p className="text-md font-semibold text-teal-700 italic">
                Here's a glimpse of our dynamic and educational daily schedule
                filled with engaging activities.
              </p>
            </Slide>
            <p className="text-lg font-semibold text-orange-400 italic mt-3">
              Morning:
            </p>
            <ol className="text-md font-semibold text-teal-700 italic my-3 ms-4">
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-sm" />
                  Breakfast
                </li>
              </Zoom>
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-sm" />
                  Team-building exercises and icebreaker games
                </li>
              </Zoom>
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-sm" />
                  Outdoor sports and recreational activities (e.g., soccer,
                  basketball, capture the flag)
                </li>
              </Zoom>
            </ol>
            <p className="text-lg font-semibold text-orange-400 my-2">
              {" "}
              Afternoon:
            </p>
            <ol className="text-md font-semibold text-teal-700 italic ms-4">
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-xs" />
                  Specialty workshops and skill-building sessions (e.g., arts
                  and craft)
                </li>
              </Zoom>
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-sm" />
                  Adventure activities (e.g., hiking, canoeing, archery)
                </li>
              </Zoom>
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-sm" />
                  Swimming and water games
                </li>
              </Zoom>
            </ol>
            <p className="text-lg font-semibold text-orange-400 my-2">
              {" "}
              Evening:{" "}
            </p>
            <ol className="text-xl font-semibold text-teal-700 italic ms-4">
              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-sm" />
                  Evening snack
                </li>
              </Zoom>

              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-sm" />
                  Campfire and storytelling
                </li>
              </Zoom>

              <Zoom>
                <li className="flex flex-row items-center">
                  <FaCircle className=" me-2 text-sm" />
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
