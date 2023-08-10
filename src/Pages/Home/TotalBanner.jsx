import React from "react";
import {Slide} from "react-awesome-reveal";
import CountUp, {useCountUp} from "react-countup";

const TotalBanner = () => {
  return (
    <div className="TotalBanner overflow-hidden mt-20 bg-slate-700 max-w-6xl mx-auto my-36 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 max-w-6xl mx-auto  ">
        {/* Each counter-item */}
        <Slide direction="right">
          {" "}
          <div className="bg-sky-100 flex flex-col items-center p-4 ms-3">
            <img src="/arts-and-crafts.png" className=" w-16"></img>
            <p className="text-gray-700 text-3xl font-bold">
              <CountUpAnimated end={200} id="coursesCounter" />+
            </p>
            <p className="text-4xl font-bold text-orange-300">Courses</p>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="bg-green-100 flex flex-col items-center p-4">
            <img src="/online-learning.png" className=" w-16"></img>
            <p className="text-gray-700 text-3xl font-bold">
              <CountUpAnimated end={100} id="instructorCounter" />+
            </p>
            <p className="text-4xl font-bold text-sky-700">Instructors</p>
          </div>
        </Slide>

        <Slide direction="left">
          <div className="bg-green-100 flex flex-col items-center p-4  ">
            <img src="/camping-tent.png" className=" w-16"></img>
            <p className="text-gray-700 text-3xl font-bold">
              <CountUpAnimated end={30} id="sitesCounter" />+
            </p>
            <p className="text-4xl font-bold text-sky-700">Camping Sites</p>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="bg-sky-100 flex flex-col items-center p-4 me-3">
            <img src="/people.png" className=" w-16"></img>
            <p className="text-gray-700 text-3xl font-bold">
              <CountUpAnimated end={2000} id="studentCounter" />+
            </p>
            <p className="text-4xl font-bold text-orange-300">Students</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

const CountUpAnimated = ({end, id}) => {
  useCountUp({
    ref: id,
    end: end,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return <span id={id} />;
};

export default TotalBanner;
