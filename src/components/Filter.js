import React from "react";

const Filter = () => {
  return (
    <div className="flex">
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Base input
        </label>
        <input
          type="text"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select your country
        </label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
