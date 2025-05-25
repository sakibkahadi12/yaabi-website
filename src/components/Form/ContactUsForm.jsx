"use client";

import { useForm } from "react-hook-form";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
   console.log(data)
  };

  return (
    <div className="bg-[url('/assets/bg.svg')] bg-[1110%] sm:bg-[100%] sm:bg-cover bg-no-repeat flex items-center justify-center mt-6 px-4 sm:px-6 lg:px-8  h-screen">
      <div className="max-w-[402px] w-full ">
        <section className="text-[#000000]">
          <h1 className="font-bold leading-[58px] text-[48px] sm:text-[60px] text-center mb-10 ">
            Contact Us
          </h1>
          <p className="font-normal  mb-16 text-[18px] sm:text-[20px] text-center ">
            For most queries please give us a hello!!
          </p>
        </section>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Email Field */}
          <div>
            {/* <label
              htmlFor="email"
              className="block text-[15px] leading-5 font-medium text-[#10243E]"
            >
              Email
            </label> */}
            <input
              id="email"
              placeholder="Email"
              type="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className={`mt-1  block w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-[#D8E6F3]"
              } rounded-[5px]  font-medium focus:outline-none focus:border-[#7F9DBF] placeholder:text-[#10243E] placeholder:font-medium  sm:text-[14px]  text-[#10243E]`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            {/* <label
              htmlFor="phone"
              className="block text-[15px] leading-5 font-medium text-[#10243E]"
            >
              Phone
            </label> */}
            <input
              id="phone"
              type="tel"
              placeholder="Phone"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number (10-15 digits required)",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.phone ? "border-red-500" : "border-[#D8E6F3]"
              } rounded-[5px]  font-medium focus:outline-none focus:border-[#7F9DBF] placeholder:text-[#10243E] placeholder:font-medium  sm:text-[14px]  text-[#10243E]`}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Query Field */}
          <div>
            {/* <label
              htmlFor="query"
              className="block text-[15px] leading-5 font-medium text-[#10243E]"
            >
              Query
            </label> */}
            <textarea
              id="query"
              placeholder="Query"
              aria-invalid={errors.query ? "true" : "false"}
              aria-describedby={errors.query ? "query-error" : undefined}
              {...register("query", {
                required: "Query is required",
                minLength: {
                  value: 10,
                  message: "Query must be at least 10 characters long",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.query ? "border-red-500" : "border-[#D8E6F3]"
              } rounded-[5px]  font-medium focus:outline-none focus:border-[#7F9DBF] placeholder:text-[#10243E] placeholder:font-medium  sm:text-[14px]  text-[#10243E]`}
              rows="4"
            />
            {errors.query && (
              <p id="query-error" className="mt-1 text-sm text-red-600">
                {errors.query.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent text-[15px] leading-5 font-medium rounded-[5px] text-[#ffffff] bg-[#154D7E] hover:bg-[#10395D]   ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
