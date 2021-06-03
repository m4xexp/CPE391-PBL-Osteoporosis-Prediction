import React from "react";
import { useForm } from "react-hook-form";

function Predict() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  //   console.log(watch("Smoke")); // watch input value by passing the name of it
  return (
    <section className="w-full px-8 py-16 bg-gray-100 xl:px-8" id="predict">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 md:w-3/5 md:pr-16">
            <p className="font-medium text-blue-500 uppercase">
              Building Businesses
            </p>
            <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
              Changing The Way People Do Business.
            </h2>
            <p className="text-xl text-gray-600 md:pr-16">
              Learn how to engage with your visitors and teach them about your
              mission. We're revolutionizing the way customers and businesses
              interact.
            </p>
          </div>

          <div className="w-full mt-16 md:mt-0 md:w-2/5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h6 className="mb-6 text-2xl font-semibold text-left font-kanit">
                  Personal
                </h6>

                <label class="block mt-4">
                  <span class="text-gray-700 font-kanit">Gender</span>
                  <select
                    {...register("Gender", { required: true })}
                    class="font-kanit block mt-2 w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
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

                <label class="block mt-4 ">
                  <span class="text-gray-700 font-kanit">Age</span>
                  <input
                    id="age "
                    type="number"
                    {...register("age", {
                      min: 1,
                      max: 100,
                      maxLength: 3,
                      required: true,
                    })}
                    className="font-kanit block mt-2 w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </label>
                {errors.age && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <h6 className="my-8 text-2xl font-semibold text-left font-kanit">
                  Life Independence
                </h6>
                <label class="block mt-4">
                  <span class="text-gray-700 font-kanit">Daily Walking</span>
                  <select
                    {...register("DailyWalking", { required: true })}
                    class="font-kanit block mt-2 w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Please Select</option>
                    <option value="0">No</option>
                    <option value="20"> Once a day for 20 minutes</option>
                    <option value="40"> Twice a day for 20 minutes</option>
                    <option value="30"> Once a day for 30 minutes</option>
                    <option value="60"> Twice a day for 30 minutes</option>
                  </select>
                </label>
                {errors.DailyWalking && (
                  <span className="text-red-500 font-kanit">
                    This field is required
                  </span>
                )}

                <label class="block mt-4">
                  <span class="text-gray-700 font-kanit">Eating Habit</span>
                  <select
                    {...register("EatingHabit", { required: true })}
                    class="font-kanit block mt-2 w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
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

                <div class="my-4">
                  <span class="text-gray-700 font-kanit">Smoke</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        {...register("Smoke", { required: true })}
                        type="radio"
                        value="1"
                        className="font-kanit"
                      />
                      <span class="ml-2 font-kanit">Yes</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        {...register("Smoke", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span class="ml-2 font-kanit">No</span>
                    </label>
                  </div>
                </div>
                {errors.Smoke && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div class="my-4">
                  <span class="text-gray-700">Drink</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        {...register("Drink", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span class="ml-2">Yes</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        {...register("Drink", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span class="ml-2">No</span>
                    </label>
                  </div>
                </div>
                {errors.Drink && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div class="my-4">
                  <span class="text-gray-700">Osteoporosis drug</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        {...register("OsteoporosisDrug", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span class="ml-2">Yes</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        {...register("Osteoporosis drug", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span class="ml-2">No</span>
                    </label>
                  </div>
                </div>
                {errors.OsteoporosisDrug && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div class="my-4">
                  <span class="text-gray-700">
                    Can you walk more than 15 minutes?
                  </span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        {...register("WalkMoreThan15min", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span class="ml-2">Yes</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        {...register("WalkMoreThan15min", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span class="ml-2">No</span>
                    </label>
                  </div>
                </div>
                {errors.WalkMoreThan15min && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div class="my-4">
                  <span class="text-gray-700">Can get up from the chair?</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        {...register("GetUpFromChair", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span class="ml-2">Yes</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        {...register("GetUpFromChair", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span class="ml-2">No</span>
                    </label>
                  </div>
                </div>
                {errors.GetUpFromChair && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div class="my-4">
                  <span class="text-gray-700">
                    Can you go up and down stairs without being transmitted to
                    the railing or wall?
                  </span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        {...register("UpDownWORaiil", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span class="ml-2">Yes</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        {...register("UpDownWORaiil", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span class="ml-2">No</span>
                    </label>
                  </div>
                </div>
                {errors.UpDownWORaiil && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div class="my-4">
                  <span class="text-gray-700">
                    Can you walk without a cane?
                  </span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        {...register("WalkWOCane", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span class="ml-2">Yes</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        {...register("WalkWOCane", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span class="ml-2">No</span>
                    </label>
                  </div>
                </div>
                {errors.WalkWOCane && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div class="my-4">
                  <span class="text-gray-700">Are you actively going out?</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        {...register("ActivelyGoingOut", { required: true })}
                        type="radio"
                        value="1"
                      />
                      <span class="ml-2">Yes</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        {...register("ActivelyGoingOut", { required: true })}
                        type="radio"
                        value="0"
                      />
                      <span class="ml-2">No</span>
                    </label>
                  </div>
                </div>
                {errors.ActivelyGoingOut && (
                  <span className="text-red-500">This field is required</span>
                )}
                {/* include validation with required or other standard HTML validation rules */}

                <input
                  type="submit"
                  className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
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
