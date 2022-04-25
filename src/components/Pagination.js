import React from "react";
import { LeftArrow, RightArrow } from "./SVGIcons";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex items-center justify-center pt-10">
      <div onClick={() => page > 1 && setPage(page - 1)}>
        <LeftArrow />
      </div>
      <span className="mx-6 text-4xl">{page}</span>
      <div onClick={() => setPage(page + 1)}>
        <RightArrow />
      </div>
    </div>
  );
};

export default Pagination;
