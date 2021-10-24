import {motion} from "framer-motion"
import {db} from "./firebase"
import {useState,useEffect} from "react"
import { updateDoc,doc,getDoc, deleteDoc } from "firebase/firestore";
import { TrashIcon } from '@heroicons/react/outline'
import {useSelector} from "react-redux"
import { selectUser} from './features/userSlice';

function FbCard({name,batch,img,msg,i,keyID}) {
    const [like,setLike]=useState(0);
    const [liked,setLiked]=useState(false);
    const docRef = doc(db, 'docs', keyID);
    const user=useSelector(selectUser);
    useEffect(() => {
        getDoc(docRef).then(doc=>{
            setLike((doc.data().like))})
    }, [like])// eslint-disable-line react-hooks/exhaustive-deps
    const colorsClass=[ ["cyan-100","cyan-400","blue-500"],
                        ["fuchsia-100","fuchsia-500","purple-600"],
                        ["green-100","green-400","cyan-500"],
                        ["purple-100","purple-500","indigo-500"],
                        ["orange-100","yellow-400","orange-500"],
                        ["rose-100","pink-500","rose-500"],
                        ["blue-100","blue-400","indigo-500"],
                        ["cyan-100","cyan-400","blue-500"],
                        ["orange-100","orange-400","pink-600"],
                        ["green-100","green-400","cyan-600"],
                        ]
    const svgClass1="mb-5 fill-current text-" + colorsClass[i][0]
    const imgClass="w-12 h-12 rounded-full bg-"+colorsClass[i][0]
    const spanClass="text-"+colorsClass[i][0]
    const gradientClass="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-"+colorsClass[i][1]+" to-"+colorsClass[i][2]
    
      const handleLike=()=>{
            if(liked){
            updateDoc(docRef, {
                like: String(parseInt(like)-1)});  
            setLiked(false); 
            setLike(String(parseInt(like)-1)); }
            else{
                updateDoc(docRef, {
                    like: String(parseInt(like)+1)});  
                setLiked(true);  
                setLike(String(parseInt(like)+1))
          }
            
      }
      const handleDelete=() => {
          
          deleteDoc(doc(db, "docs", keyID));
      }
   
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1,transition:{duration: 0.5,delay:0.2}}} className="w-full">
        <li
            className="px-3 md:px-4 flex-none my-4 w-full">
                    <figure className="shadow-lg rounded-xl flex-none md:w-xl">
                        
                        <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                        {(user.email==="greenclub@iitgn.ac.in")?<TrashIcon onClick={handleDelete} className="ml-auto -mt-3 h-7 w-7 text-blue-300 hover:text-blue-600 transition-all"/>:<></>}
                            <svg width="45" height="36" className={svgClass1}>
                                <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                </path>
                            </svg>
                            <p>{msg}</p>
                        </blockquote>
                        <figcaption className={gradientClass}>
                            <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                <img src={img} alt="" className={imgClass} loading="lazy"/></div>
                                <div className="flex-auto">{name}<br/>
                                <span className={spanClass}>{batch}</span></div>
                                <cite className="flex"><div onClick={handleLike} className="opacity-50 hover:opacity-75 transition-opacity duration-200">
                                    <span className="sr-only">Original tweet by Guillermo Rauch</span>
                                    <div className="flex flex-col">
                                    {liked?
                                    <motion.svg
                                        className="mx-auto" xmlns="http://www.w3.org/2000/svg"  width="33" height="32" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                    </motion.svg>: 
                                     <motion.svg
                                        className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="33" height="32"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </motion.svg>}
                                    <div class="not-italic font-treb text-sm mx-auto">{like} likes</div>
                                    </div>
                                    
                                    
                                    
                                    </div></cite></figcaption></figure>
        </li>
        </motion.div>
    )
}

export default FbCard
