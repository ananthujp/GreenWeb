import { AboutSVG, GitIcon } from "./vectors/importSVG";
import { motion } from "framer-motion";
import { animImg, animH1, animH2 } from "./Animations";
import ContactCard, { ContactCard2 } from "./ContactCard";
import Dhanesh from "./images/dhanesh.png";
import Anuj from "./images/anuj.png";
import Nand from "./images/nandana.png";
import Shashi from "./images/shashi.png";
import Amitesh from "./images/amitesh.png";
import Shekhar from "./images/shekhar.png";
import Prasanth from "./images/prasanth.png";
import Hrusti from "./images/hrusti.png";
import Devvrat from "./images/devvrat.png";
import Aman from "./images/aman.png";
import Akash from "./images/akash.png";
import Hitesh from "./images/hitesh.png";
import Rahul from "./images/rahul.png";
import Sheersha from "./images/sheersha.png";
import Me from "./images/me.png";
import tw from "./images/logo/tw.png";
import react from "./images/logo/react.png";
import redux from "./images/logo/redux.png";
import firebase from "./images/logo/firebase.png";
import fmotion from "./images/logo/motion.png";
import heroi from "./images/logo/hero.png";
const Illustrations = [
  "vectorjuice",
  "upklyak",
  "pch.vector",
  "katemangostar",
  "chris francis",
];
const editor = ["Dhanesh", "Hrusti", "Shruti S Nair"];
const AboutData = [
  {
    name: "Akash Unnikrishnan",
    img: Akash,
    role: "General Member",
    insta: "https://www.instagram.com/akashunnikrishnan/",
    linkd: "https://in.linkedin.com/in/akash-unnikrishnan-b12b60169/",
    email: "akash.unnikrishnan@iitgn.ac.in",
  },
  {
    name: "Aman",
    img: Aman,
    role: "Product Development and Design ",

    email: "aman.18110014@iitgn.ac.in",
  },
  {
    name: "Amitesh Sabut",
    img: Amitesh,
    role: "Product Development and Design ",
    insta: "https://www.instagram.com/amitesh______",
    linkd: "https://www.linkedin.com/in/amitesh-sabut",
    fb: "https://www.facebook.com/profile.php?id=100004147268037",
    email: "amiteshsabut@iitgn.ac.in",
  },
  {
    name: "Ananthu JP",
    img: Me,
    role: "Convener",
    email: "ananthu.jp@iitgn.ac.in",
    insta: "https://www.instagram.com/ananthujp/",
    fb: "https://www.facebook.com/ananthujp/",
    twitter: "https://twitter.com/ananthujp",
  },
  {
    name: "Anuj Buch",
    img: Anuj,
    role: "Marketing and Outreach Team",
    insta: "https://www.instagram.com/anujbuch/",
    linkd: "https://www.linkedin.com/in/anuj-buch-97a06a212",
    fb: null,
    email: "anuj.buch@iitgn.ac.in",
  },

  {
    name: "Devvrat Joshi",
    img: Devvrat,
    role: "Technical Development Team ",
    insta: "https://www.instagram.com/devvratjoshi2000/",
    linkd: "https://www.linkedin.com/in/devvrat-joshi-14082000/",
    email: "devvrat.joshi@iitgn.ac.in",
  },
  {
    name: "Dhanesh Bhutada",
    img: Dhanesh,
    role: "Editorial Board",
    insta: null,
    linkd: null,
    fb: null,
    email: "dhanesh.bhutada@iitgn.ac.in",
  },

  {
    name: "Hitesh Pradhan",
    img: Hitesh,
    role: "General Member",
    twitter: "https://twitter.com/pradhan006",
    linkd: "www.linkedin.com/in/pradhanhitesh/",
    email: "hiteshpradhan@iitgn.ac.in",
  },

  {
    name: "Hrushti Naik",
    img: Hrusti,
    role: "Editorial  Board",
    insta: "https://www.instagram.com/hrushtinaik",
    email: "hrushti.n@iitgn.ac.in",
  },
  {
    name: "Nandana Dilip K",
    img: Nand,
    role: "Social media Team",
    insta: "https://www.instagram.com/nandana.dilip/",
    linkd: "https://www.linkedin.com/mwlite/in/nandana-dilip",
    fb: "https://m.facebook.com/nandana.dilip.1",
    email: "nandanadilipk@iitgn.ac.in",
  },
  {
    name: "Prasanth P Nair",
    img: Prasanth,
    role: "Technical Development Team ",
    insta: "https://www.instagram.com/_prasanth_p_nair_",
    linkd: "https://www.linkedin.com/in/prasanth-p-nair-85267314b/",
    fb: "https://www.facebook.com/prasanth.p.nair.92",
    email: "prasanth.n@iitgn.ac.in",
  },
  {
    name: "Rahul Kumar",
    img: Rahul,
    role: "Social media Team",
    insta: "https://www.instagram.com/gunny_fuy",
    email: "rahul.kmr@iitgn.ac.in",
  },
  {
    name: "Shashi",
    img: Shashi,
    role: "Marketing and Outreach Team",
    insta: "https://www.instagram.com/digitalshashi11/",
    linkd: "https://www.linkedin.com/in/shashi-meena-00b16b1a3",
    fb: null,
    email: "shashi.18110157@iitgn.ac.in",
  },

  {
    name: "Sheersha Barik",
    img: Sheersha,
    role: "General Member",
    email: "sheershabarik@iitgn.ac.in",
  },
  {
    name: "Shekhar Yadav",
    img: Shekhar,
    role: "General Member",
    insta: null,
    linkd: null,
    fb: "https://www.facebook.com/shekharkumar.yadav.9",
    email: "yadav_shekhar@iitgn.ac.in",
    twitter: "https://twitter.com/skydibru",
  },
];
const AboutFounders = [
  {
    name: "Amardeep Tiwari",
    img: "https://students.iitgn.ac.in/greenclub/game/img/amar.png",
    role: "PhD Batch 2016",
    email: "amar.tiwari@alumni.iitgn.ac.in",
    insta: "https://www.instagram.com/amardeep.tiwari/",
    fb: "https://www.facebook.com/amardeep.tiwari.14",
  },
  {
    name: "Ananthu JP",
    img: "https://students.iitgn.ac.in/greenclub/game/img/jp.jpg",
    role: "PhD Batch 2020",
    email: "ananthu.jp@iitgn.ac.in",
    insta: "https://www.instagram.com/ananthujp/",
    fb: "https://www.facebook.com/ananthujp/",
    twitter: "https://twitter.com/ananthujp",
  },
  {
    name: "Anukesh K A",
    img: "https://students.iitgn.ac.in/greenclub/game/img/anuk.png",
    role: "PhD Batch 2016",
    email: "a.anukesh@iitgn.ac.in",
    fb: "https://www.facebook.com/anukesh.ambikapanicker",
    twitter: "https://twitter.com/anukeshkaiitgn",
  },
  {
    name: "Sandhra S",
    img: "https://students.iitgn.ac.in/greenclub/game/img/sand.png",
    role: "MA Batch 2019",
    email: "s_sandhra@alumni.iitgn.ac.in",
    fb: "https://www.facebook.com/anna.christof.77",
    insta: "https://www.instagram.com/_.sandhra_/",
  },
  {
    name: "Shriya Naidu",
    img: "https://students.iitgn.ac.in/greenclub/game/img/Shriya.png",
    role: "Staff ",
    email: "shriya.n@iitgn.ac.in",
  },
];
const PastConveners = [
  { year: "2020 - 21", name: "Anukesh K A", email: "a.anukesh@iitgn.ac.in" },
  { year: "2021 - 22", name: "Ananthu J P", email: "ananthu.jp@iitgn.ac.in" },
];
function About() {
  return (
    <motion.div
    // variants={animMainDiv}
    // initial="initial"
    // animate="animate"
    // exit="exit"
    >
      <div className="w-full mt-12 flex flex-col items-center mb-10">
        <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
          <motion.div
            variants={animImg}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" w-full  mx-auto"
          >
            <AboutSVG />
          </motion.div>
          <motion.h1
            variants={animH1}
            initial="initial"
            animate="animate"
            exit="exit"
            className="font-beb mt-10 text-purple-400 mx-auto lg:text-8xl md:text-6xl text-4xl"
          >
            ABOUT
          </motion.h1>
          <motion.h1
            variants={animH2}
            initial="initial"
            animate="animate"
            exit="exit"
            className="ftext-center mx-auto font-treb text-md text-purple-400"
          >
            Meet Our Team
          </motion.h1>
        </div>
        <motion.div
          variants={animImg}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-row md:w-3/4 flex-wrap mx-auto justify-center item-center"
        >
          {AboutData.map((data, index) => (
            <ContactCard
              name={data.name}
              role={data.role}
              img={data.img}
              i={index}
              insta={data.insta}
              linkd={data.linkd}
              fb={data.fb}
              email={data.email}
            />
          ))}
        </motion.div>

        <motion.h1
          variants={animH2}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-center mx-auto font-beb text-2xl text-purple-600 mt-8 mb-4"
        >
          Technical Details
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col w-6/7 items-center justify-center transition-all bg-gray-50 hover:bg-purple-50 rounded-xl border-2 border-gray-100 hover:border-purple-100"
        >
          <div className="flex flex-row flex-wrap mt-2 mb-2 p-2">
            <img
              onClick={() =>
                window.open("https://reactjs.org/", "_blank").focus()
              }
              src={react}
              className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer"
              alt=""
            />
            <img
              onClick={() =>
                window.open("https://tailwindcss.com/", "_blank").focus()
              }
              src={tw}
              className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer"
              alt=""
            />
            <img
              onClick={() =>
                window.open("https://redux.js.org/", "_blank").focus()
              }
              src={redux}
              className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer"
              alt=""
            />
            <img
              //onClick={()=>window.open('https://www.framer.com/motion/', '_blank').focus()}
              src={fmotion}
              className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer"
              alt=""
            />
            <img
              onClick={() =>
                window.open("https://firebase.google.com/", "_blank").focus()
              }
              src={firebase}
              className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer"
              alt=""
            />
            <img
              //onClick={()=>window.open('https://heroicons.com/', '_blank').focus()}
              src={heroi}
              className="lg:w-28 md:w-24 w-16 cursor-pointer"
              alt=""
            />
          </div>
          <div className="mb-8 w-full ml-8">
            <h1 className="font-treb md:text-sm text-xs font-semibold text-gray-500 flex items-center">
              <h1 className="text-gray-800">Developer : &nbsp;</h1> Ananthu JP
              &nbsp;
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/ananthujp", "_blank")
                }
              >
                <GitIcon />
              </div>
            </h1>
            <h1 className="font-treb md:text-sm text-xs font-semibold text-gray-500 flex items-center">
              <h1 className="text-gray-800">Source Code :&nbsp;</h1>
              <h1
                className=" cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/ananthujp/GreenWeb", "_blank")
                }
              >
                GreenWeb (Github)
              </h1>
            </h1>
            <h1 className="font-treb md:text-sm text-xs font-semibold text-gray-500 flex items-center">
              <h1 className="text-gray-800">Illustrations :&nbsp;</h1>{" "}
              {Illustrations.map((item) => item + ", ")}
            </h1>
            <h1 className="font-treb md:text-sm text-xs font-semibold text-gray-500 flex items-center">
              <h1 className="text-gray-800">Editorial Content :&nbsp;</h1>{" "}
              {editor.map((item) => item + ", ")}
            </h1>
          </div>
        </motion.div>
        <motion.h1
          variants={animH2}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-center mx-auto font-beb text-2xl text-purple-600 mt-12 -mb-6"
        >
          Founding Members
        </motion.h1>
        <motion.div
          variants={animImg}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-row md:w-3/4 flex-wrap mx-auto justify-center item-center"
        >
          {AboutFounders.map((data, index) => (
            <ContactCard2
              name={data.name}
              role={data.role}
              img={data.img}
              i={index}
              insta={data.insta}
              linkd={data.linkd}
              fb={data.fb}
              email={data.email}
            />
          ))}
        </motion.div>
        <motion.h1
          variants={animH2}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-center mx-auto font-beb text-2xl text-purple-600 mt-12 mb-2"
        >
          Past Convenors
        </motion.h1>
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-6/7 transition-all bg-gray-50 cursor-default hover:bg-purple-50 rounded-xl border-2 border-gray-100 hover:border-purple-100"
        >
          <tr>
            <th className="px-2">Year</th>
            <th className="px-2">Name</th>
            <th className="px-2">Emails</th>
          </tr>
          {PastConveners.map((dc) => (
            <tr className="hover:bg-purple-200">
              <th className="px-2 font-normal">{dc.year}</th>
              <th className="px-2 font-normal">{dc.name}</th>
              <th className="px-2 font-normal">{dc.email}</th>
            </tr>
          ))}
        </motion.table>
      </div>
    </motion.div>
  );
}

export default About;
