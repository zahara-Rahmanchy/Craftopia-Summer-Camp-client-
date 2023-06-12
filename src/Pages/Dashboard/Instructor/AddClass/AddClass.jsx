import React, {useContext} from "react";
import {AuthContext} from "../../../../Provider/AuthProvider";
import {FaUpload} from "react-icons/fa";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";
import {Helmet} from "react-helmet-async";

const imageHostingToken = import.meta.env.VITE_IMAGE_KEY;
const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

const AddClass = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingURL, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgRes => {
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const {name, email, className, price, availableSeat} = data;
          const newClass = {
            instructorName: name,
            email,
            className,
            price: parseFloat(price),
            availableSeat: parseInt(availableSeat),
            image: imgURL,
            totalEnrolled: parseInt(0),
            status: "pending",
          };

          axiosSecure.post("/class", newClass).then(data => {
            Swal.fire({
              title: "Your class has been added!",
            });
            reset();
          });
        }
      });
  };
  const file = watch("image");

  return (
    <>
      {" "}
      <Helmet>
        <title>Craftopia | Dashboard | Add Class</title>
      </Helmet>
      <div className="h-full bg-teal-100 w-full">
        <h2 className="text-center text-3xl pt-5 pb-3 text-teal-900 font-semibold uppercase">
          Add a class
        </h2>
        <div className="hero ">
          <div className="hero-content md:w-full">
            <div className=" shadow-2xl bg-transparent w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body  bg-gradient-to-b from-teal-600  via-green-300 to-green-200 rounded-lg"
              >
                <div className="flex md:flex-row flex-col justify-between">
                  <div className="form-control flex flex-row text-white">
                    <label className="label">
                      <span className="label-text text-white md:text-xl text-lg">
                        Name:{" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered bg-transparent border-0 md:text-2xl text-xl"
                      readOnly
                      value={user?.displayName}
                      {...register("name")}
                    ></input>
                  </div>
                  <div className="form-control flex flex-row text-white">
                    <label className="label">
                      <span className="label-text text-white md:text-xl text-lg">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      readOnly
                      value={user.email}
                      className="input input-bordered  bg-transparent t border-0 md:text-2xl text-xl"
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-xl text-white">
                      Class Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Class Name"
                    className="input input-bordered  bg-transparent t border-0  border-b-4"
                    {...register("className", {
                      required: "Class Name is required",
                    })}
                  />
                </div>
                <div className="flex md:flex-row flex-col justify-between">
                  <div className="form-control w-1/2  me-4">
                    <label className="label">
                      <span className="label-text  text-xl text-white font-semibold">
                        {" "}
                        Price
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Price"
                      className="input input-bordered  bg-transparent  border-0  border-b-4"
                      {...register("price", {required: "Price is required"})}
                    />
                  </div>
                  <div className="form-control w-1/2 ms-4 ">
                    <label className="label">
                      <span className="label-text  text-xl text-white">
                        Available Seats
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Seats"
                      className="input input-bordered  bg-transparent  border-0  border-b-4"
                      {...register("availableSeat", {
                        required: "Available seat number is required",
                      })}
                    />
                    {errors.image && (
                      <span className="text-red-300 text-xs">
                        {errors.image.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-control  w-1/3 h-3/4 p-5 border-dashed border-4 mx-auto my-9 border-teal-500">
                  <div className="flex justify-center">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span>
                        <FaUpload className="text-4xl text-center m-3" />
                      </span>

                      <input
                        id="file-upload"
                        type="file"
                        {...register("image")}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {file && file.length > 0 && (
                    <p className="mt-2 text-blue-900 text-center">
                      {file[0].name}
                    </p>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button
                    className="btn  hover:bg-orange-400 bg-orange-300  text-white w-1/2 mx-auto text-xl"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </form>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClass;
