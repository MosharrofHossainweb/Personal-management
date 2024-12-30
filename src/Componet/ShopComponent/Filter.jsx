import React from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

const Filter = () => {
  return (
    <>
      <section className="py-9 bg-[#F9F1E7]">
        <div className="container flex justify-between">
          <div className="fiter flex items-center gap-12">
            <p className="font-poppin text-2xl font-medium flex items-center gap-4  ">
              <HiAdjustmentsHorizontal />
              <span>Filter</span>
            </p>
            <p className="font-poppin text-2xl font-medium ">
              Showing 1–16 of 32 results
            </p>
          </div>
          <div className="sort flex gap-8 items-center">
            <div className="show flex items-center gap-5">
              <label className="font-poppin text-2xl px-2 py-2 font-medium ">Show</label>
              <input
                className="font-poppin text-2xl text-center px-2 py-2 font-medium w-[60px]"
                type="number"
                value="16"
              />
            </div>
            <div className="show flex items-center gap-5">
              <label className="font-poppin text-2xl font-medium ">Sort by</label>
              <select className="font-poppin text-xl py-2 text-center font-medium w-[150px]
               ">
                <option value="Defualt">Default</option>
               </select>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
