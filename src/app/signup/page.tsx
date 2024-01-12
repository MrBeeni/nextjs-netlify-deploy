import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="container flex justify-center py-5">
      <form className="py-5 px-10 md:w-[55vw] lg:w-[40vw] bg-white rounded-md shadow-2xl shadow-slate-900">
        <div className="text-2xl font-bold text-center pb-4 text-blue-700">
          Sign Up
        </div>
        <div className="pb-4">
          <input
            type="text"
            required
            className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="First Name"
          />
        </div>
        <div className="pb-4">
          <input
            type="text"
            required
            className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Last Name"
          />
        </div>
        <div className="pb-4">
          <input
            type="text"
            required
            className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
          />
        </div>
        <div className="pb-4">
          <input
            type="text"
            required
            className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Phone"
          />
        </div>
        <div className="text-center text-sm pb-4">
          Your password is 8-20 characters, includes one letter and one number
        </div>
        <div className="pb-4">
          <input
            type="password"
            required
            className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
          />
        </div>
        <div className="pb-4">
          <input
            type="password"
            required
            className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex items-start pb-4">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 bg-gray-50 rounded border border-indigo-200 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="flex ml-2 text-sm font-medium text-gray-900"
          >
            <p>I agree to the</p>
            <p className="text-blue-500 pl-1">
              Terms of service&amp; Privacy Pilicy
            </p>
          </label>
        </div>
        <div className="b">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Create An Account
          </button>
        </div>
        <div className="text-center text-base font-medium pt-4">
          <span>
            Have already a account ?
            <Link className="text-blue-500 underline" href="/login">
              Login here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Page;
