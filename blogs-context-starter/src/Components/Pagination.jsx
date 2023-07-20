import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center border shadow-md fixed bottom-0 bg-white ">
      <div className=" w-11/12 max-w-[670px] py-3 flex   flex justify-between ">
        <div className="flex gap-x-5">
          {page > 1 && (
            <button
              className="rounded-md border px-4 py-1"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="rounded-md border px-4 py-1"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
