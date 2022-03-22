import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { db } from "./firebase";
import HomeFbCard from "./HomeFbCard";
import { useDispatch } from "react-redux";
import Logo from "./vectors/ico/iitl.svg";
import { setChannelInfo } from "./features/appSlice";
import HomeProjComp from "./HomeProjComp";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import SustainableCampus from "./SustainableCampus";

function HomeComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [docs, setDoc] = useState([]);
  const dataRef = collection(db, "docs");
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };
  useEffect(() => {
    onSnapshot(query(dataRef, orderBy("date", "desc")), (doc) => {
      setDoc(doc.docs.map((dc) => ({ data: dc.data(), id: dc.id })));
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.5 },
      }}
      exit={{ opacity: 0 }}
      id="glassBg"
      className="md:w-3/4 w-full overflow-y-auto md:mr-0 mr-4 md:h-3/5 h-4/5  flex flex-col md:justify-between justify-around rounded-xl overflow-hidden"
    >
      <div className="flex md:flex-row flex-col justify-between md:h-full md:overflow-hidden overflow-y-auto w-full m-4">
        <div className="flex flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, staggerChildren: 0.5 },
            }}
            exit={{ opacity: 0 }}
            className="flex flex-col max-w-xs h-full justify-between	 w-full"
          >
            <div className="flex flex-row">
              <div className="w-1 bg-red-800 h-full mr-2 mt-1"></div>
              <div className="flex flex-col">
                <motion.div variants={item} className="flex flex-row">
                  <h1 className="text-left text-5xl font-popb text-white">
                    Green
                  </h1>
                </motion.div>
                <motion.div variants={item} className="flex flex-row ">
                  <h1 className="text-left text-5xl font-popb text-white">
                    Club
                  </h1>
                </motion.div>
              </div>
            </div>
            <motion.div variants={item} className="flex flex-row">
              <div className="w-1 bg-red-800 h-2/4 mr-2 mt-1"></div>
              <h1 className="text-left text-2xl font-pop text-white">
                IIT Gandhinagar
              </h1>
            </motion.div>
            <motion.h1
              variants={item}
              className="text-xs max-w-xs max-h-24 overflow-y-auto ml-4 mt-1 text-justify font-popt text-white"
            >
              IIT Gandhinagar is one of the most efficient campuses when it
              comes to green development and eco-friendly initiatives, whereby
              we seek to promote aesthetic value through the preservation of the
              campus biodiversity. Through the creation of a Green Club, we
              propose to actively encourage the IIT Gandhinagar community to
              minimize the impact of our campus on the environment. Students and
              staff can use this platform to share their love for nature, come
              up with innovative solutions and start-up ideas for environmental
              problems and reduce the overall carbon footprint of the Institute.
              If there is one overarching aim or wish we have it is that we
              continue to meaningfully contribute to our campus’ sustainability
              goals but without your support, our activities will have a limited
              impact. So, what are you waiting for? Come be a part of the green
              movement on campus!
            </motion.h1>
            <motion.div
              variants={item}
              className="flex flex-row ml-4 mt-2 justify-around"
            >
              <button
                onClick={() => dispatch(setChannelInfo({ channelName: true }))}
                class="py-3 my-2 px-4 bg-red-700 text-white font-pop rounded-full text-xs hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              >
                View More
              </button>
              <Link
                to={"/About"}
                className="py-3 my-2 px-6 bg-white text-indigo-500 font-pop rounded-full text-xs hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              >
                About
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="max-w-xs md:flex hidden items-end ml-4 justify-center">
          <img className="w-4/5" src={Logo} alt="" />
        </div>
        <div className="flex flex-col md:-ml-8 max-w-xs my-2">
          <h1 className="text-white font-pop mb-2 text-left ml-4 text-md">
            Campus Footprint
          </h1>
          <SustainableCampus
            height={document.getElementById("projComp")?.clientHeight}
          />
        </div>
        <div className="flex flex-row max-w-xs justify-center items-center mx-6">
          <HomeProjComp />
        </div>
      </div>
      <div className="mb-2 w-full ">
        <div>
          <h1 className="text-white text-lg font-treb ml-8">User Reviews</h1>
          <div className="flex flex-row justify-between mx-4 rounded-3xl overflow-hidden">
            <ScrollContainer horizontal className="w-full">
              <div className="flex flex-row">
                {docs.map((doc, index) =>
                  doc.data.show ? (
                    <HomeFbCard
                      key={`home.fbcard.${index}`}
                      name={doc.data.name}
                      img={doc.data.img}
                      msg={doc.data.msg}
                      i={index % 10}
                    />
                  ) : (
                    <></>
                  )
                )}
              </div>
            </ScrollContainer>

            <div
              onClick={useCallback(() => history.push("/Feedback"), [history])}
              className="flex flex-col animate-pulse cursor-pointer mr-2 items-start justify-start bg-opacity-25 w-6 transition-all h-28 mt-1 mx-2 hover:border-4 bg-white hover:bg-purple-600  rounded-r-3xl"
            >
              <h1 className="whitespace-nowrap text-purple-100 text-xs transform origin-bottom-left rotate-90">
                Write a Review
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeComponent;
