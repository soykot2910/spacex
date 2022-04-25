import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { fetchData } from "../lib/helper";
import Pagination from "./Pagination";
import { Spinner } from "./SVGIcons";

const History = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchData(setData, limit, setLoading);
  }, [limit]);

  useEffect(() => {
    setLimit(page * 5);
  }, [page]);



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

        {loading ? (
         <div className="flex items-center justify-center py-40">
            <Spinner />
           </div>
        ) : (
          <div className="py-20">
            <div className="grid grid-cols-3 gap-4">
              {data.map((item) => (
                <div
                  class="bg-white rounded-lg border flex flex-col items-center 
              border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src={item.links.mission_patch_small}
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.mission_name}
                      </h5>
                    </a>
                    <p class="mb-3  font-normal text-gray-700 dark:text-gray-400">
                      {item.details}
                    </p>
                    <a
                      href={item.links.article_link}
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <Pagination page={page} setPage={setPage} setLoading={setLoading} />
          </div>
        )}
      </div>
    </section>
  );
};

export default History;
