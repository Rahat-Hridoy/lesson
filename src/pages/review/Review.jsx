import React from "react";

const Review = () => {
  return (
    <section className="bg-[#2E2100] mb-[200px] ">
      <div className="container mx-auto py-[96px] ">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          {/* profile */}
          <div className="">
            <div className="w-[72px] h-[72px] rounded-full mx-auto lg:mx-0 ">
              <img src="/image/avatar-profile.png" alt="Avatar" />
            </div>
            <div className="text-center lg:text-left pb-[20px] lg:pb-0 ">
              <h4 className="font-sen font-bold text-[24px] text-white leading-[34px] pt-[18px] pb-[4px] ">
                Peter Moor
              </h4>
              <p className="font-pop font-normal text-sm text-[#BFBCB2] leading-[26px] ">
                Student of Web Design
              </p>
            </div>
          </div>
          {/* reviews */}
          <div className="relative">
            <p className="font-pop font-medium italic text-[20px] lg:text-[26px] text-white leading-[40px] max-w-[740px] pl-[20px] lg:pl-0 ">
              Not only does my resume look impressive—filled with the names and
              logos of world-class institutions—but these certificates also
              bring me closer to my career goals by validating the skills I've
              learned."
            </p>
            <div className="w-[24px] lg:w-[30px] h-[22px] lg:h-[28px] absolute -top-[20px] -left-[8px] lg:-top-[30px] lg:-left-[30px] ">
              <img src="/image/quote.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
