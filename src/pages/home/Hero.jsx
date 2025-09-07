import { FaPlay } from "react-icons/fa";
import Counter from "../../components/Counter";

const floatCard = [
  {
    icon: <img src="/src/assets/ui-ux.png" />,
    subhead: "20 Courses",
    head: "ui/ux design",
  },
  {
    icon: <img src="/src/assets/dev.png" />,
    subhead: "20 Courses",
    head: "Development",
  },
  {
    icon: <img src="/src/assets/marketing.png" />,
    subhead: "20 Courses",
    head: "Marketing",
  },
];

const Hero = () => {
  return (
    <section className="bg-primary pb-[65px] ">
      <div className="container mx-auto  ">
        <div className="pt-[64px] flex flex-col md:flex-row justify-between items-center ">
          {/* {left-side} */}
          <div className="relative max-w-[470px] w-full ">
            <img
              src="/src/assets/hero_figure.jpg"
              alt="figure"
              className=" w-full h-auto object-cover  "
            />
            {/* floating card */}
            <div className="hidden md:block w-[270px] h-[244px] bg-white rounded-xl absolute bottom-[48px] -right-[100px] ">
              {floatCard.map((float, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start space-x-4 pl-[24px] pt-[24px] "
                >
                  <div className="bg-[#FFB900]/20 w-[48px] h-[48px] rounded-full flex items-center justify-center ">
                    {float.icon}
                  </div>
                  <div>
                    <p className="font-pop font-normal text-sm text-cgray ">
                      {" "}
                      {float.subhead}{" "}
                    </p>
                    <h5 className="font-pop font-semibold text-lg text-cdark upercase">
                      {float.head}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right side */}
          <div className="max-w-[470px] ">
            <h1 className="font-sen font-bold text-[58px] text-cdark leading-[68px] -tracking-[2%] ">
              Learn without limits and spread knowledge.
            </h1>
            <p
              className="font-pop font-normal text-lg text-cgray
             "
            >
              Build new skills for that “this is my year” feeling with courses,
              certificates, and degrees from world-class universities and
              companies.
            </p>
            {/* button */}
            <div className="flex items-center justify-start space-x-[28px] pt-[38px] ">
              <div className="w-[180px] h-[64px] bg-secondary rounded-full flex justify-center items-center duration-300 hover:scale-95">
                <button className="font-pop font-semibold text-lg text-white hover:cursor-pointer  ">
                  See Courses
                </button>
              </div>
              <div>
                <button className="flex justify-center items-center space-x-2 hover:cursor-pointer group ">
                  <div className="w-[40px] h-[40px] rounded-full border-1 border-cdark flex justify-center items-center duration-300   group-active:scale-90 group-active:border-secondary ">
                    <FaPlay className="text-cdark w-[12px] h-[12px] group-hover:text-secondary group-active:text-cdark " />
                  </div>
                  <span className="font-pop font-semibold text-lg text-cdark ">
                    Watch Video
                  </span>
                </button>
              </div>
            </div>
            {/* counter */}
            <div>
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
