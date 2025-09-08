import React from "react";
import Button from "./Button";
// components/CommonSection.jsx

const CommonSection = ({
  direction,
  img,
  title,
  description,
  period,
  btntext,
  btnAlign,
}) => {
  return (
    <section dir={direction} className="container mx-auto">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 md:space-x-[130px]">
        {/* Image Side */}
        <div className="max-w-[470px] min-w-[270px] h-auto flex items-center justify-center">
          {img}
        </div>

        {/* Content Side */}
        <div className="max-w-[470px] pt-[30px] lg:pt-0">
          <h2 className="font-sen font-bold text-[38px] text-cdark leading-[48px] -tracking-[2%]">
            {title}
          </h2>

          <p className="font-pop font-normal text-[16px] text-cgray leading-[28px] py-[16px] text-left">
            {description}
          </p>

          <p className="font-pop font-normal text-[16px] text-cgray leading-[28px] pb-[10px] lg:pb-[32px] text-left">
            {period}
          </p>

          <Button buttonText={btntext} align={btnAlign} />
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
