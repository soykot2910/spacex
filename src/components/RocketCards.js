import React, { useEffect, useState } from "react";
import { fetchData } from "../lib/helper";
import Filter from "./Filter";
import Pagination from "./Pagination";
import SingleRocketCard from "./SingleRocketCard";
import { Spinner } from "./SVGIcons";

const RocketCards = () => {
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
        {loading ? (
          <div className="flex items-center justify-center py-40">
            <Spinner />
          </div>
        ) : (
          <div className="py-20">
            <div className="grid grid-cols-3 gap-4">
              {data.map((item) => (
                <SingleRocketCard item={item} />
              ))}
            </div>
            <Pagination page={page} setPage={setPage} setLoading={setLoading} />
          </div>
        )}
      </div>
    </section>
  );
};

export default RocketCards;
