import React from "react";
import ScrollCounter from "./CounterFunction";

const Counter = () => {
  const targetStudent = 50;
  const targetCourses = 70;

  return (
    <div className="pt-[48px]">
      <h5 className="font-pop font-normal text-lg text-cgray">
        Recent engagement
      </h5>
      <div className="flex items-center justify-start space-x-[15px] md:space-x-[29px]">
        {/* Students */}
        <div className="flex justify-center items-baseline space-x-1 md:space-x-3">
          <h2 className="font-sen font-bold text-[32px] md:text-[44px] text-cdark">
            <ScrollCounter target={targetStudent} />K
          </h2>
          <p className="font-pop font-normal text-lg text-cgray">Students</p>
        </div>

        {/* Courses */}
        <div className="flex justify-center items-baseline space-x-1 md:space-x-3">
          <h2 className="font-sen font-bold text-[32px] md:text-[44px] text-cdark">
            <ScrollCounter target={targetCourses} />+
          </h2>
          <p className="font-pop font-normal text-lg text-cgray">Courses</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
