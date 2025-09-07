import React from "react";

const SectionHeader = ({ mainHead, subHead, Align = "", Width = "" }) => {
  return (
    <>
      <div>
        <h2
          className={`font-sen font-bold text-[38px] text-cdark  leading-[48px] -tracking-[2%] pb-[14px] ${Align} ${Width}`}
        >
          {mainHead}
        </h2>
        <p
          className={`font-pop font-normal text-lg text-cgray ${Align} ${Width} `}
        >
          {subHead}
        </p>
      </div>
    </>
  );
};

export default SectionHeader;
