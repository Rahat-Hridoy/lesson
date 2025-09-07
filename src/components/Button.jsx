import React from "react";

const Button = ({ buttonText, path, align = "" }) => {
  return (
    <>
      <div className={`${align}`}>
        <button
          to={{ path }}
          className=" font-pop font-semibold text-sm text-white  leading-[26px] bg-secondary px-[24px] py-[12px] rounded-full duration-300 hover:bg-cdark hover:cursor-pointer  "
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Button;
