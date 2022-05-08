import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const History = () => {

  return (
    <section className="bg-black text-white">
      <div className="container !py-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-col px-14">
            <h2 className="text-7xl tracking-[3px]">
              <CountUp end={153} />
            </h2>
            <p className="text-xs font-medium">TOTAL LAUNCHES</p>
          </div>
          <div className="flex items-center flex-col px-14">
            <h2 className="text-7xl tracking-[3px]">
              <CountUp end={115} />
            </h2>
            <p className="text-xs font-medium">TOTAL LANDINGS</p>
          </div>
          <div className="flex items-center flex-col px-14">
            <h2 className="text-7xl tracking-[3px]">
              <CountUp end={92} />
            </h2>
            <p className="text-xs font-medium">REFLOWN ROCKETS</p>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default History;
