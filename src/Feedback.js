import {useState,useEffect} from "react"
import {FeedbackSVG} from "./vectors/importSVG"
import FbCard from "./FbCard"
import {db} from "./firebase"
import FbInput from "./FbInput"
import {motion} from "framer-motion"
import {animImg,animH1,animH2} from "./Animations"
//import { collection, addDoc, getDocs } from "firebase/firestore"; 

import {collection, onSnapshot, orderBy,query} from "firebase/firestore"

function Suggestions() {
    const [docs,setDoc]=useState([]);
    const dataRef=collection(db,"docs")
    useEffect(() => {
        onSnapshot(query(dataRef, orderBy("date", "desc")),doc=>{
                setDoc(doc.docs.map(dc=>({data: dc.data(),id : dc.id}))
                );
            })
            
        ;
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1,transition: { duration: 0.5 , when: "beforeChildren",staggerChildren: 0.5}}}
       exit={{opacity:1,transition: { duration: 0.5 , delay: 0.5, when: "afterChildren"}}} className="bg-blue-50"><div className="fixed top-0 w-full h-12 bg-purple-600"></div>
        <div className="w-full mt-12 flex flex-col ">
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,transition: { duration: 0.5 , delay: 0.5,staggerChildren: 0.5}}}
                
                className="flex flex-col w-3/4 md:w-1/2  mx-auto">
                
            <motion.div
                
                variants={animImg}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full  mx-auto">
                <FeedbackSVG/>
            </motion.div>
            <motion.h1
                variants={animH1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-beb mt-10 text-purple-300 mx-auto lg:text-8xl md:text-6xl text-4xl">FEEDBACK</motion.h1>
            <motion.h1
                variants={animH2}
                initial="initial"
                animate="animate"
                exit="exit"
                className="ftext-center mx-auto font-treb text-md text-purple-300">Lorem Ipsum</motion.h1>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration: 0.5, staggerChildren: 0.5,delay: 1.0}}}
                exit={{opacity:0}} className=" mx-auto  w-full">
                
                <FbInput />
            </motion.div>
            </motion.div>
            <div className="md:w-1 w-full flex md:border-l border-t border-gray-100"></div>
            <div className="mx-auto md:w-3/5 w-4/5 flex overflow-hidden -my-8">
            <ul className="flex flex-col items-center w-full py-8">
            {docs.map((doc,index)=>
                <FbCard 
                name={doc.data.name}
                batch={doc.data.batch}
                img={doc.data.img}
                msg={doc.data.msg}
                i={index%10}
                key={doc.id}
                keyID={doc.id}
            />)}
    
            </ul>
           
            </div>
        </div>
        </motion.div>
    )
}

export default Suggestions
