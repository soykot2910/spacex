import React from "react";

export const Maincontent = () => {
  return (
    <div className="bg-[#F1F9F9] w-full lg:w-[70%]  border-l-2 border-[#EDEDED] px-12 pt-2">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[#30545B]">12 Results</p>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-[#30545B] text-lg">Sort by</h3>
          <div className="px-3">
            <select
              id=""
              class="p-3 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
            >
              <option>Last week</option>
            </select>
          </div>
          <div className="">
            <select
              id=""
              class="p-3 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
            >
              <option>Launch Status</option>
            </select>
          </div>
          <div className="px-3">
            <input type="checkbox" className=" borders-2 border-[#EDEDED] rounded-md mr-2"/>
            <label className="font-medium">is it upcomming</label>
          </div>
        </div>
      </div>
    </div>
  );
};
