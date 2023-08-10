import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <h2
        className="text-5xl font-semibold mb-2 text-center   mt-28 text-teal-700"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontVariationSettings: "'opsz' 14, 'wght' 400",
        }}
      >
        Welcome to our Summer Camp Adventure!
      </h2>
      <hr class="border-t-4 border-orange-300 w-1/4 mx-auto" />
      <h3 className="text-center text-slate-700 text-3xl my-2">
        Know About Us!
      </h3>
      <section className=" bg-slate-950 bg-opacity-90  mx-auto my-20 px-10 lg:py-0 py-16">
        <div className=" mx-auto text-center ">
          {/* Discover Creativity in Nature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="md:text-left">
              <p className="text-teal-400 mb-8 text-2xl">
                At our unique summer camp, we offer an unforgettable experience
                that combines the joy of arts and crafts with the excitement of
                camping. Nestled in picturesque locations, our camp provides the
                perfect backdrop for your child's creative journey and outdoor
                exploration.
              </p>
              <h3 className="text-3xl font-semibold mb-2 text-orange-300">
                Discover Creativity in Nature
              </h3>
              <p className="text-gray-100 text-lg">
                Our camp is a haven for young artists and craft enthusiasts. We
                believe in nurturing creativity through hands-on experiences.
                Here, children get the chance to immerse themselves in a world
                of colors, textures, and imagination. From painting and pottery
                to DIY crafts and sculpting, our arts and crafts sessions
                inspire young minds to create, innovate, and express themselves
                in the most artistic ways.
              </p>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1686920244656-49a53311437b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Arts and Crafts"
                className="rounded-lg  md:order-2 shadow-lg shadow-teal-300 lg:mt-16"
              />
            </div>
          </div>

          {/* Crafting Memories Through Camping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1587547131116-a0655a526190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80"
                alt="Camping"
                className="rounded-lg shadow-lg shadow-orange-400"
              />
            </div>
            <div className="md:text-left md:order-2 order-1">
              <h3 className="text-3xl font-semibold mb-2 text-teal-500">
                Crafting Memories Through Camping
              </h3>
              <p className="text-gray-100 text-lg">
                But our camp is not just about brushes and canvases. We believe
                that the best way to foster a sense of wonder is by connecting
                with nature. That's why our campers get to experience the thrill
                of camping in carefully selected locations. They'll learn
                essential outdoor skills, bond with fellow campers around a
                campfire, and experience the magic of sleeping under the stars.
              </p>
            </div>
          </div>

          {/* A Family Affair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <div className="md:text-left">
              <h3 className="text-3xl text-orange-300 font-semibold mb-2">
                A Family Affair
              </h3>
              <p className="text-gray-100 text-lg">
                We also understand the value of family time. That's why we
                invite parents to join the adventure! Imagine spending quality
                time with your child as you both explore the world of arts and
                crafts and embark on camping expeditions together. It's a chance
                to create memories that will be cherished for years to come.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517419455681-74fdb65819c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Family Camping"
                className="rounded-lg shadow-lg shadow-teal-300 md:order-2"
              />
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-12 pb-20 grid md:grid-cols-2 grid-cols-1 w-full text-left place-content-center md:place-content-start">
            <div className=" flex flex-col justify-center items-center md:items-start">
              {" "}
              <h3 className="md:text-5xl text-4xl font-semibold mb-4 md:text-left text-teal-500 text-center w-full">
                What to Expect
              </h3>
              <ul className="list-inside text-gray-100 text-lg md:ms-6 custom-list ">
                <li>Expert-led arts and crafts workshops</li>
                <li>Outdoor adventures and camping</li>{" "}
                <li>Nature exploration hikes</li>
              </ul>
            </div>
            <div className=" flex flex-col justify-center items-center md:items-start">
              {" "}
              <ul className="list-inside text-gray-100 text-lg md:ms-6 custom-list ms-0 md:mt-10">
                <li>Opportunities for parents to join</li>
                <li>Safe and inclusive environment</li>
                <li>Lifelong friendships and memories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
