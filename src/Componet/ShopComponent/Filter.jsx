import React from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

const Filter = () => {
  return (
    <>
      <section className="py-9 bg-[#F9F1E7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-12">
            {/* Filter text */}
            <div className="filter flex items-center gap-4 sm:gap-12">
              <p className="font-poppins text-xl sm:text-2xl font-medium flex items-center gap-4">
                <HiAdjustmentsHorizontal />
                <span>Filter</span>
              </p>
              <p className="font-poppins text-base sm:text-xl font-medium">
                Showing 1–16 of 32 results
              </p>
            </div>

            {/* Sorting controls */}
            <div className="sort flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
              <div className="show flex items-center gap-4 sm:gap-5">
                <label className="font-poppins text-base sm:text-2xl font-medium">Show</label>
                <input
                  className="font-poppins text-base sm:text-2xl text-center px-2 py-2 font-medium w-[60px] sm:w-[80px]"
                  type="number"
                  value="16"
                />
              </div>

              <div className="show flex items-center gap-4 sm:gap-5">
                <label className="font-poppins text-base sm:text-2xl font-medium">Sort by</label>
                <select className="font-poppins text-base sm:text-xl py-2 text-center font-medium w-[140px] sm:w-[150px]">
                  <option value="Defualt">Default</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
