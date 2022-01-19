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
import { useHistory } from "react-router-dom";

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
      <div className="flex md:flex-row flex-col justify-between md:h-full overflow-y-auto w-full m-4">
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
              The Green Club is IIT Gandhinagar’s sustainability club which aims
              to promote cleanliness and sensitivity to environmental issues.
              IIT Gandhinagar has one of the most efficient campuses in terms of
              green development and eco-friendly initiatives, including the
              promotion of aesthetic value and preservation of the campus’s
              biodiversity. The Green Club facilitates this further, by
              encouraging the student community to also work towards making the
              campus sustainable and develop innovative ideas for conserving the
              environment.
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
              <button class="py-3 my-2 px-6 -ml-4 bg-white text-indigo-500 font-pop rounded-full text-xs hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
                About
              </button>
            </motion.div>
          </motion.div>
        </div>
        <div className="max-w-xs md:flex hidden items-end ml-4 justify-center">
          <img className=" w-4/5" src={Logo} alt="" />
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
              className="flex flex-col cursor-pointer mr-2 items-start justify-start bg-opacity-25 w-6 transition-all h-28 mt-1 mx-2 hover:border-4 bg-white hover:bg-indigo-600  rounded-r-3xl"
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
