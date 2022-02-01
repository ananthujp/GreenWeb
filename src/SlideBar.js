import { useEffect } from "react";
import { setSlideInfo, setScrolInfo } from "./features/appSlice";
import { useDispatch } from "react-redux";
import { HeroData } from "./TextData";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { motion, useViewportScroll, useTransform } from "framer-motion";
function SlideBar() {
  const { scrollYProgress } = useViewportScroll();

  const n = parseInt(HeroData.length);
  const scale = useTransform(scrollYProgress, [0, 1], [-183, -25]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0, n - 1]);

  const dispatch = useDispatch();

  useEffect(() => {
    scale2.onChange(() => {
      fetchData(parseInt(scale2.get()));
      dispatch(setScrolInfo({ scroll: scale2.get() }));
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchData(0);
  }, []);
  const fetchData = (e) => {
    dispatch(
      setSlideInfo({
        slideTitle: HeroData[e].title,
        slideSubTitle: HeroData[e].subtitle,
        slideContent: HeroData[e].content,
        logo: HeroData[e].logo,
      })
    );
  };
  return (
    <div>
      <div className=" fixed flex flex-col z-20 top-32 right-6 items-center">
        <div className=" px-1 flex flex-col bg-white bg-opacity-10 border-0 rounded-3xl   opacity-70">
          <div
            onClick={(e) => window.scrollTo(0, 0.01 * window.innerHeight)}
            className="bg-gray-300 bg-opacity-25 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"
          ></div>
          <div
            onClick={(e) => window.scrollTo(0, (window.innerHeight * 1.21) / 6)}
            className="bg-gray-300 bg-opacity-25 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"
          ></div>
          <div
            onClick={(e) => window.scrollTo(0, (window.innerHeight * 2.41) / 6)}
            className="bg-gray-300 bg-opacity-25 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"
          ></div>
          <div
            onClick={(e) => window.scrollTo(0, (window.innerHeight * 3.61) / 6)}
            className="bg-gray-300 bg-opacity-25 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"
          ></div>
          <div
            onClick={(e) => window.scrollTo(0, (window.innerHeight * 4.81) / 6)}
            className="bg-gray-300 bg-opacity-25 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"
          ></div>
          <div
            onClick={(e) => window.scrollTo(0, (window.innerHeight * 6) / 6)}
            className="bg-gray-300 bg-opacity-25 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"
          ></div>
        </div>
        <motion.div
          className="z-21 text-white rounded-full bg-white w-4 h-4 "
          style={{
            translateY: scale,
          }}
        ></motion.div>
        <div className="w-4 -mt-2 text-white animate-bounce">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
