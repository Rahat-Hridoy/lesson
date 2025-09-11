import React from "react";
import Button from "./Button";

const cardItem = [
  {
    id: 1,
    image: <img src="/image/image.jpg" alt="Image" />,
    date: "21 November 2021",
    title: "How to become a pro web designer in 2022 and get remot job?",
  },
  {
    id: 2,
    image: <img src="/image/image.jpg" alt="Image" />,
    date: "21 November 2021",
    title: "How to become a pro web designer in 2022 and get remot job?",
  },
  {
    id: 3,
    image: <img src="/image/image.jpg" alt="Image" />,
    date: "21 November 2021",
    title: "How to become a pro web designer in 2022 and get remot job?",
  },
];

const BlogCard = () => {
  return (
    <div>
      <div className="pt-[55px] flex justify-center items-center gap-x-5 gap-y-4 overflow-hidden ">
        {/* Card */}

        {cardItem.map((card) => (
          <div
            key={card.id}
            className="w-[370px]  bg-white shadow-md rounded-2xl duration-300 hover:cursor-pointer  hover:shadow-xl "
          >
            <div className="max-w-[370px] w-full max-h-[278px]  ">
              {card.image}
            </div>
            <div className="flex flex-col items-start gap-y-3 p-[20px] ">
              <div className="flex items-center justify-start gap-x-2 ">
                <div className="w-[6px] h-[6px] bg-secondary rounded-full "></div>
                <p> {card.date} </p>
              </div>
              <div className="w-[160px] h-[1px] bg-[#E2DFDA]  "></div>
              <h3 className="font-pop font-semibold text-[16px] text-cdark  leading-[28px]  ">
                {card.title}
              </h3>
              <Button buttonText={"Read More"} />
            </div>
          </div>
        ))}
      </div>
      {/* slider indicator */}
      <div className="flex items-center justify-center gap-x-2 pt-[20px] ">
        {cardItem.map((dot) => (
          <div key={dot.id}>
            <a href=".">
              <div className="w-[6px] h-[6px] bg-secondary rounded-full "></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
