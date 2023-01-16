import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import colorsClass from "./Colors";
import {
  MinusIcon,
  PencilIcon,
  PlusIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import useAuth from "./Auth";
function Element({
  rev,
  i,
  id,
  title,
  subtitle,
  date,
  dateN,
  data,
  child,
  pics,
  setEdit,
}) {
  const [opened, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [image, setImage] = useState({ id: 0, url: "", expand: false });
  const ref = useRef(null);
  const animationControls = useAnimation();
  const { authState } = useAuth();
  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const sequence = async () => {
    await animationControls.start({
      width: width,
      borderRadius: "100px",
      // transition: {
      //   ease: "easeInOut",
      //   duration: 1,
      // },
    });
    await animationControls.start({
      width: 30,
      borderRadius: "100px",
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    });
    await animationControls.start({
      width: "auto",
      height: "auto",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    });
  };
  const initial = async () => {
    await animationControls.start({
      height: 32,
      borderRadius: "100px",
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    });
  };
  useEffect(() => {
    opened && sequence();
    !opened && initial();
  }, [opened]);
  const isMobile = window.matchMedia(
    "only screen and (max-width: 768px)"
  ).matches;
  return (
    <>
      <motion.div
        onClick={() => !opened && setOpen(true)}
        initial={{ opacity: 0, scale: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.5,
          delay: 0.0005,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        className={
          "flex group justify-center w-full pointer-events-auto" +
          (!isMobile && (rev ? " flex-row-reverse " : " flex-row ")) +
          (isMobile && !opened && (rev ? " flex-row-reverse " : " flex-row ")) +
          (isMobile && opened && (rev ? " flex-col " : " flex-col "))
        }
      >
        <motion.div
          className={
            "flex w-full   " +
            (!isMobile
              ? rev
                ? "pl-4 justify-start "
                : "pr-4 justify-end "
              : opened
              ? " justify-center "
              : rev
              ? "pl-4 justify-start "
              : "pr-4 justify-end ")
          }
        >
          {/* <AnimatePresence> */}
          <motion.div
            ref={ref}
            key={id}
            initial={{ borderRadius: "100px" }}
            animate={animationControls}
            //   onAnimationComplete={() =>
            //     opened &&
            //     setHeight({ ...height, height: ref.current.offsetHeight })
            //   }
            className={
              "mb-0 flex group-hover:scale-105 transition-all flex-row justify-between overflow-hidden h-8 bg-gradient-to-br animate-all shadow-lg mt-2 " +
              colorsClass[i % 10][2] +
              (rev ? " flex-row-reverse" : " flex-row")
              //+ (opened ? " rounded-full" : " rounded-full")
            }
          >
            <div
              className={
                "flex" + (rev ? " flex-row-reverse pl-4" : " flex-row pr-4")
              }
            >
              {/* <AnimatePresence> */}
              {!opened && (
                <motion.div
                  initial={{ rotate: rev ? -180 : 180 }}
                  animate={{
                    rotate: rev ? 0 : 0,
                    transition: { duration: 1, ease: "easeIn" },
                  }}
                  exit={{
                    rotate: rev ? -180 : 180,
                    transition: { duration: 1, ease: "easeIn" },
                  }}
                  className={
                    "rounded-full bg-white h-6 w-6 my-auto text-center  text-sm flex items-center justify-center " +
                    //+colorsClass[i % 10][2]
                    (rev ? " mr-1 " : " ml-1 ") +
                    colorsClass[i % 10][0]
                  }
                >
                  {date.toString().slice(8, 10)}
                </motion.div>
              )}
              {/* </AnimatePresence> */}
              {/* <AnimatePresence> */}
              {!opened && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: 1,
                    width: "auto",
                    transition: { delay: 1 },
                  }}
                  exit={{ opacity: 0, transition: { delay: 0.2 } }}
                  className={
                    "my-auto text-sm cursor-pointer text-white" +
                    (rev ? "  mr-1" : "  ml-1")
                  }
                >
                  {title.length < 15 ? title : title.slice(0, 14) + "..."}
                </motion.div>
              )}
              {/* </AnimatePresence> */}
            </div>
            {/* <AnimatePresence> */}
            {opened && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.5 } }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { delay: 0.5, duration: 0.3 },
                }}
                className="flex flex-col bg-white h-full p-4"
              >
                <div className="w-full flex flex-row justify-between">
                  <h1
                    className={
                      "font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r " +
                      colorsClass[i % 10][2]
                    }
                  >
                    {title}
                  </h1>
                  <XCircleIcon
                    onClick={() => setOpen(false)}
                    className={
                      " cursor-pointer w-6 z-50 ml-auto mr-1 mt-1 " +
                      colorsClass[i % 10][0]
                    }
                  />
                </div>

                <h1 className="text-xs font-light text-gray-400">{subtitle}</h1>
                <p className="mt-2 max-w-[21rem] text-sm text-gray-600 text-justify">
                  {data}
                </p>
                {child && (
                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{ __html: String(child) }}
                  />
                )}
                <div className="w-full flex flex-row justify-between">
                  <div />
                  {authState && (
                    <PencilIcon
                      onClick={() =>
                        setEdit({
                          id: id,
                          title: title,
                          subtitle: subtitle,
                          data: data,
                          child: child,
                          date: date,
                          pics: pics,
                        })
                      }
                      className={
                        " cursor-pointer w-5 z-50 ml-auto mr-1 mt-1 text-green-400"
                      }
                    />
                  )}
                </div>
              </motion.div>
            )}
            {/* </AnimatePresence> */}
            {false && !opened && (
              <PlusIcon
                className={"w-5 text-white" + (rev ? " ml-1" : " mr-1")}
              />
            )}
          </motion.div>
          {/* </AnimatePresence> */}
        </motion.div>

        <div
          className={
            "flex flex-col mx-auto items-center h-[99.9] justify-start"
          }
        >
          <div
            className={
              "h-8 mb-1 pb-1 bg-gray-400 rounded-b-full " +
              (opened ? "w-0.5" : "w-0.5")
            }
          ></div>
          <div
            className={
              "mb-1 rounded-full  " +
              colorsClass[i % 10][1] +
              (!opened ? " p-1" : " p-0.5")
            }
          >
            {opened && (
              <div onClick={() => setOpen(false)}>
                <MinusIcon className="cursor-pointer text-white w-4 p-1" />
              </div>
            )}
            {!opened && (
              <div
                className="w-0 h-0 group-hover:w-3 group-hover:h-3 transition-all "
                onClick={() => setOpen(false)}
              >
                <PlusIcon className="cursor-pointer text-white w-3 p-0" />
              </div>
            )}
          </div>
          <motion.div
            animate={{ height: "100%" }}
            className={
              " bg-gray-400 rounded-t-full " + (opened ? "w-0.5" : "w-0.5")
            }
          ></motion.div>
        </div>

        <div
          className={
            " w-full flex flex-row " +
            (isMobile ? " mt-0 " : " mt-3 ") +
            (!isMobile
              ? rev
                ? " justify-end mr-2 "
                : " justify-start ml-2 "
              : opened
              ? " justify-center "
              : rev
              ? " justify-end mr-2 "
              : " justify-start ml-2 ")
          }
        >
          {/* <AnimatePresence> */}
          {opened && image.expand && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: !isMobile ? "auto" : 160 }}
              exit={{ height: 0 }}
              className="shadow-md rounded-md -mt-1 overflow-hidden flex flex-col flex-1 relative max-w-[21rem] "
            >
              <XCircleIcon
                onClick={() => setImage({ ...image, expand: false })}
                className="text-white cursor-pointer shadow-md w-6 z-50 ml-auto mr-1 mt-1"
              />
              {/* <AnimatePresence exitBeforeEnter> */}
              <motion.img
                key={`image.key${image.url}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0 }}
                className="absolute object-cover  w-full h-full"
                src={image.url}
                alt=""
              />
              {/* </AnimatePresence> */}

              <div className="relative flex mt-auto mb-2 -space-x-4 z-50 mx-auto">
                {pics.map((dc, i) => (
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { delay: 0.5 + i * 0.2, duration: 0.4 },
                    }}
                    key={`thumbs.id.${i}`}
                    onClick={() => setImage({ ...image, id: i, url: dc })}
                    className={
                      "bg-white border-4 border-white hover:sepia transition-all rounded-full h-12 w-12 object-cover shadow-lg "
                    }
                    src={dc}
                  />
                ))}
              </div>
            </motion.div>
          )}
          {/* </AnimatePresence> */}
          <div className="flex  -space-x-4">
            {/* <AnimatePresence mode="popLayout"> */}
            {opened &&
              !image.expand &&
              pics.map((dc, i) => (
                <motion.img
                  key={`thumb.id.${i}`}
                  onClick={() =>
                    //setImage({ id: i, url: dc });
                    //setExpand(true);
                    setImage({ id: i, url: dc, expand: true })
                  }
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 1 + i * 0.2, duration: 0.4 },
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: { delay: 0.5 + i * 0.2, duration: 0.4 },
                  }}
                  className={
                    "bg-white border-4 border-white hover:sepia transition-all rounded-full h-12 w-12 object-cover shadow-lg " +
                    (isMobile ? " mb-2 " : " mb-12 ")
                  }
                  src={dc}
                />
              ))}
            {/* </AnimatePresence> */}
          </div>
        </div>
      </motion.div>
      {i === 0 ? (
        <div className="mx-auto text-xs bg-gray-200 px-2 py-0.5 rounded-md">
          {date?.toLocaleString("default", { month: "long" })}
        </div>
      ) : dateN?.toLocaleString("default", { month: "numeric" }) !==
        date?.toLocaleString("default", { month: "numeric" }) ? (
        <div className="mx-auto text-xs bg-gray-200 px-2 py-0.5 rounded-md">
          {date?.toLocaleString("default", { month: "long" })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Element;
