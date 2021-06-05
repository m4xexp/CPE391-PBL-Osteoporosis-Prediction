import React from "react";
import { useForm } from "react-hook-form";
import FormData from "form-data";
import Swal from "sweetalert2";
import axios from "axios";

function Predict() {
  // const [Done, setDone] = React.useState(true);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const options = {
    method: "POST",
    url: "https://ost-predict-backend.herokuapp.com/predict/ost/",
    headers: {
      "content-type": "multipart/form-data",
    },
    // config: { responseType: "blob" },
    // responseType: "blob",
  };

  async function onSubmit(data) {
    const bodyFormData = new FormData();
    bodyFormData.append("Age", data.Age);
    bodyFormData.append("Gender", data.Gender);
    bodyFormData.append("Drink", data.Drink);
    bodyFormData.append("Smoke", data.Smoke);
    bodyFormData.append("Drug", data.Drug);
    bodyFormData.append("DailyWalking", data.DailyWalking);
    bodyFormData.append("EatingHabit", data.EatingHabit);
    bodyFormData.append("Walk15Min", data.Walk15Min);
    bodyFormData.append("GetupFromChair", data.GetupFromChair);
    bodyFormData.append("WalkWORail", data.WalkWORail);
    bodyFormData.append("WalkWOCane", data.WalkWOCane);
    bodyFormData.append("ActivelyGoOut", data.ActivelyGoOut);
    // console.log(data);

    try {
      const res = await axios.post(options.url, bodyFormData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const result = res.data;
      // console.log(result);
      // setDone(true);
      if (result.predict === 0) {
        Swal.fire({
          title: "Result",
          html: `<strong style="color: #41B87F">${result.result}</strong>`,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Continue",
        });
      } else {
        Swal.fire({
          title: "Result",
          html: `<strong style="color: #fe0000">${result.result}</strong><p style="color: #fe0000">${result.advice}</p>`,
          // text: `${result.result}`,
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Continue",
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  //   console.log(watch("Smoke")); // watch input value by passing the name of it
  return (
    <section className="w-full px-8 py-16 bg-gray-100 xl:px-8" id="predict">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 md:w-3/5 md:pr-16">
            <p className="font-medium text-blue-500 uppercase">
              Prediction System
            </p>
            <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
              Osteoporosis is more{" "}
              <span className="text-red-500">dangerous</span> than you think.
            </h2>
            <p className="text-xl text-gray-600 md:pr-16">
              Fill out the form to predict if you have this serious disease..
            </p>
          </div>

          <div className="w-full mt-16 md:mt-0 md:w-2/5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h6 className="mb-6 text-2xl font-semibold text-left font-kanit">
                  Personal
                </h6>

                <label className="block mt-4">
                  <span className="text-gray-700 font-kanit">Gender</span>
                  <select
                    {...register("Gender", { required: true })}
                    className="font-kanit block mt-2 w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Please select</option>
                    <option value="0">Female</option>
                    <option value="1">Male</option>
                  </select>
                </label>
                {errors.Gender && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <label className="block mt-4 ">
                  <span className="text-gray-700 font-kanit">Age</span>
                  <input
                    id="age "
                    type="number"
                    {...register("Age", {
                      min: 1,
                      max: 100,
                      maxLength: 3,
                      required: true,
                    })}
                    className="font-kanit block mt-2 w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </label>
                {errors.Age && (
                  <span className="text-red-500 font-kanit">
                    Age limited for 3 lenght
                  </span>
                )}

                <h6 className="my-8 text-2xl font-semibold text-left font-kanit">
                  Life Independence
                </h6>
                <label className="block mt-4">
                  <span className="text-gray-700 font-kanit">
                    Daily Walking
                  </span>
                  <select
                    {...register("DailyWalking", { required: true })}
                    className="font-kanit block mt-2 w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Please Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                    {/* <option value="0"> Once a day for 20 minutes</option> */}
                    {/* <option value="40"> Twice a day for 20 minutes</option>
                    <option value="30"> Once a day for 30 minutes</option>
                    <option value="60"> Twice a day for 30 minutes</option> */}
                  </select>
                </label>
                {errors.DailyWalking && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <label className="block mt-4">
                  <span className="text-gray-700 font-kanit">Eating Habit</span>
                  <select
                    {...register("EatingHabit", { required: true })}
                    className="font-kanit block mt-2 w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Please Select</option>
                    <option value="1">1 meal a day</option>
                    <option value="2"> 2 meals a day</option>
                    <option value="3"> 3 meals a day</option>
                  </select>
                </label>
                {errors.EatingHabit && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <div className="my-4">
                  <span className="text-gray-700 font-kanit">Smoke</span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("Smoke", { required: true })}
                        type="radio"
                        value="1"
                        className="font-kanit"
                      />
                      <span className="ml-2 font-kanit">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        {...register("Smoke", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span className="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.Smoke && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <div className="my-4">
                  <span className="text-gray-700 font-kanit">Drink</span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("Drink", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span className="ml-2 font-kanit">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        {...register("Drink", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span className="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.Drink && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <div className="my-4">
                  <span className="text-gray-700 font-kanit">
                    Osteoporosis drug
                  </span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("Drug", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span className="ml-2 font-kanit">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        {...register("Drug", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span className="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.OsteoporosisDrug && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <h6 className="my-8 text-2xl font-semibold text-left font-kanit">
                  Questionnaire
                </h6>

                <div className="my-4">
                  <span className="text-gray-700 font-kanit">
                    Can you walk more than 15 minutes?
                  </span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("Walk15Min", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span className="ml-2 font-kanit">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        {...register("Walk15Min", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span className="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.Walk15Min && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <div className="my-4">
                  <span className="text-gray-700 font-kanit">
                    Can get up from the chair?
                  </span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("GetupFromChair", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span className="ml-2 font-kanit">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        {...register("GetupFromChair", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span className="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.GetupFromChair && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <div className="my-4">
                  <span className="text-gray-700 font-kanit">
                    Can you go up and down stairs without being transmitted to
                    the railing or wall?
                  </span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("WalkWORail", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span className="ml-2 font-kanit">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        {...register("WalkWORail", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span className="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.WalkWORail && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <div className="my-4">
                  <span className="text-gray-700 font-kanit">
                    Can you walk without a cane?
                  </span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("WalkWOCane", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span className="ml-2 font-kanit">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        {...register("WalkWOCane", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span className="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.WalkWOCane && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <div className="my-4">
                  <span className="text-gray-700 font-kanit">
                    Are you actively going out?
                  </span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("ActivelyGoOut", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span className="ml-2 font-kanit">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        {...register("ActivelyGoOut", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span className="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.ActivelyGoOut && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}
                {/* include validation with required or other standard HTML validation rules */}

                <input
                  type="submit"
                  className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg pointer"
                  value="Start analyzing
                  "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Predict;
