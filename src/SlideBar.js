import { useEffect } from "react";
import { setSlideInfo, setScrolInfo } from "./features/appSlice";
import { useDispatch } from "react-redux";
import Captain from "./vectors/ico/captn.svg";
import Iit from "./vectors/ico/iit.svg";
import Blog from "./vectors/ico/blogico.svg";
import Store from "./vectors/ico/store.svg";
import Activities from "./vectors/ico/acitivity.svg";
import CampaignSVG from "./vectors/ico/campaign.svg";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { motion, useViewportScroll, useTransform } from "framer-motion";
function SlideBar() {
  const { scrollYProgress } = useViewportScroll();
  const DataTable = [
    {
      title: "Green",
      subtitle: "IIT GN",
      content:
        "The Green Club is IIT Gandhinagar’s sustainability club which aims to promote cleanliness and sensitivity to environmental issues. IIT Gandhinagar has one of the most efficient campuses in terms of green development and eco-friendly initiatives, including the promotion of aesthetic value and preservation of the campus’s biodiversity. The Green Club facilitates this further, by encouraging the student community to also work towards making the campus sustainable and develop innovative ideas for conserving the environment.",
      logo: Iit,
    },
    {
      title: "Captain",
      subtitle: "Kachra",
      content:
        "Captain Kachra is a game designed to increase awareness of waste segregation as an initiative by the Green Office. The game teaches what various products go into which bin in a fun mini-game.",
      logo: Captain,
    },
    {
      title: "Campaigns",
      subtitle: "On going",
      content: "Be a part of the green movement!",
      logo: CampaignSVG,
    },
    {
      title: "Campus",
      subtitle: "Activities",
      content: "Explore our in campus activities!",
      logo: Activities,
    },
    {
      title: "Green",
      subtitle: "Blog",
      content:
        "Publish your passions your way. Whether you'd like to share your knowledge, experiences or the latest news, create a unique and beautiful blog.",
      logo: Blog,
    },
    {
      title: "Store",
      subtitle: "Green",
      content:
        "Green Store will be a market place for all IIT GN'ians to buy, sell and explore products of various kinds. You can be a buyer or the owner of your own store. The store also helps you sell your un-used stuff, save your space and thereby helping others to get items in a cheaper way.",
      logo: Store,
    },
  ];
  const n = parseInt(DataTable.length);
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
        slideTitle: DataTable[e].title,
        slideSubTitle: DataTable[e].subtitle,
        slideContent: DataTable[e].content,
        logo: DataTable[e].logo,
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
