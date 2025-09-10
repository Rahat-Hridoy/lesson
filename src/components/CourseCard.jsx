import React from "react";
import Button from "./Button";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const cardItem = [
  {
    id: 1,
    image: <img src="/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    id: 2,
    image: <img src="/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    id: 3,
    image: <img src="/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    id: 1,
    image: <img src="/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    id: 2,
    image: <img src="/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    id: 3,
    image: <img src="/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
];

const CourseCard = () => {
  return (
    <div className="relative pt-[55px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cardItem.map((card) => (
          <SwiperSlide key={card.id} className="py-1">
            <div className="max-w-[370px] shadow-md rounded-2xl duration-300 hover:cursor-pointer hover:shadow-xl">
              <div className="max-w-[370px] w-full max-h-[278px]">
                {card.image}
              </div>
              <div className="p-[22px]">
                <h4 className="font-pop font-semibold text-lg text-cdark leading-[30px]">
                  {card.title}
                </h4>
                <p className="font-sen font-normal text-sm text-cgray leading-[26px] pt-[6px] pb-[22px]">
                  {card.story}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-pop font-semibold text-lg text-cdark leading-[30px]">
                    {card.price}
                  </p>
                  <Button buttonText={"Book Now"} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="hidden md:flex absolute -top-[30px] right-0 space-x-2">
        <button className="prev-btn w-[40px] h-[40px] border border-transparent bg-secondary text-white text-2xl rounded-full flex justify-center items-center duration-300 hover:border-secondary hover:text-secondary hover:bg-transparent">
          <GrFormPrevious />
        </button>
        <button className="next-btn w-[40px] h-[40px] border border-transparent bg-secondary text-white text-2xl rounded-full flex justify-center items-center duration-300 hover:border-secondary hover:text-secondary hover:bg-transparent">
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
