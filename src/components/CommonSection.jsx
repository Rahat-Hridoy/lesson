import React from "react";
import Button from "./Button";

const CommonSection = ({
  title,
  description,
  period,
  img,
  direction = "",
  btntext,
  btnAlign,
}) => {
  return (
    <section>
      <div className="container mx-auto">
        <div
          className={`wrapper grid grid-cols-2 [direction:${direction}] space-x-[130px] place-items-center`}
        >
          <div className={`[direction:${direction}]`}>{img}</div>
          <div className={`max-w-[470px] [direction:${direction}] `}>
            <h2 className="font-sen font-bold text-[38px] text-cdark leading-[48px] -tracking-[2%] text-left">
              {title}
            </h2>
            <p className="font-pop font-normal text-[16px] text-cgray leading-[28px] py-[16px] text-left">
              {description}
            </p>
            <p className="font-pop font-normal text-[16px] text-cgray leading-[28px] pb-[32px] text-left">
              {period}
            </p>
            <Button buttonText={btntext} align={btnAlign} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
