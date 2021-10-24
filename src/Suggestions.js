import {useState,useEffect} from "react"
import Logo from "./vectors/feedback.svg"
import FbCard from "./FbCard"
import {db} from "./firebase"
import FbInput from "./FbInput"
import {motion} from "framer-motion"
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
        animate={{opacity:1,transition: { duration: 0.5 , delay: 0.5, when: "beforeChildren"}}}
       exit={{opacity:1,transition: { duration: 0.5 , delay: 0.5, when: "afterChildren"}}} className="bg-blue-50"><div className="fixed top-0 w-full h-12 bg-purple-600"></div>
        <div className="w-full mt-12 flex md:flex-col flex-col ">
            <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
                
            <div className="w-full  mx-auto">
                <img src={Logo} alt=""/>
            </div>
            <motion.h1
                initial={{opacity:0,x: -200 }}
                animate={{opacity:1,x: 0,transition:{duration:0.6}}}
                exit={{opacity:0,x: 200,transition:{duration:0.6} }}
                className="font-beb mt-10 text-purple-300 mx-auto lg:text-8xl md:text-6xl text-4xl">FEEDBACK</motion.h1>
            <h1 className="ftext-center mx-auto font-treb text-md text-purple-300">Lorem Ipsum</h1>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration: 0.5, staggerChildren: 0.5,delay: 0.3}}} className=" mx-auto  w-full">
                <FbInput />
            </motion.div>
            </div>
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
