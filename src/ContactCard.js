import {useState} from 'react'
import {animMainDiv} from "./Animations"
import {motion} from "framer-motion"
const Insta=()=>{return(
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
      <path d="M4.773 1A3.781 3.781 0 001 4.773v5.457A3.78 3.78 0 004.773 14h5.457A3.78 3.78 0 0014 10.227V4.773A3.781 3.781 0 0010.227 1zm0 1h5.454A2.764 2.764 0 0113 4.773v5.454A2.763 2.763 0 0110.23 13H4.773A2.763 2.763 0 012 10.23V4.773A2.764 2.764 0 014.773 2zM11.5 3c-.277 0-.5.223-.5.5s.223.5.5.5.5-.223.5-.5-.223-.5-.5-.5zm-4 1A3.51 3.51 0 004 7.5 3.51 3.51 0 007.5 11 3.51 3.51 0 0011 7.5 3.51 3.51 0 007.5 4zm0 1C8.887 5 10 6.113 10 7.5S8.887 10 7.5 10A2.492 2.492 0 015 7.5C5 6.113 6.113 5 7.5 5z" />
    </svg>
)}
const Linkd=()=>{return(
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
      <path d="M2.758 1C1.793 1 1 1.793 1 2.758v9.488C1 13.207 1.793 14 2.758 14h9.488c.961 0 1.754-.793 1.754-1.754V2.758C14 1.793 13.207 1 12.246 1zm0 1h9.488c.422 0 .754.332.754.758v9.488a.747.747 0 01-.754.754H2.758A.748.748 0 012 12.246V2.758C2 2.332 2.332 2 2.758 2zM4 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 6v6h2V6zm3 0v6h2V9.32c0-.832.078-1.578 1.078-1.578.985 0 .922.895.922 1.633V12h2V9.04C12 7.32 11.64 6 9.691 6c-.937 0-1.41.375-1.668.875H8V6z" />
    </svg>
)}
const Gmail=()=>{return(
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width={15}
  height={15}
>
  <path d="M19 1H5a5.006 5.006 0 00-5 5v12a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V6a5.006 5.006 0 00-5-5zM5 3h14a3 3 0 012.78 1.887l-7.658 7.659a3.007 3.007 0 01-4.244 0L2.22 4.887A3 3 0 015 3zm14 18H5a3 3 0 01-3-3V7.5l6.464 6.46a5.007 5.007 0 007.072 0L22 7.5V18a3 3 0 01-3 3z" />
</svg>
)}
const Fb=()=>{return(
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
      <path d="M3.5 1A2.507 2.507 0 001 3.5v8C1 12.875 2.125 14 3.5 14h8c1.375 0 2.5-1.125 2.5-2.5v-8C14 2.125 12.875 1 11.5 1h-8zm0 1h8c.835 0 1.5.665 1.5 1.5v8c0 .835-.665 1.5-1.5 1.5H9.904V8.967h1.397l.209-1.61H9.904V6.332c0-.466.13-.783.803-.783h.86v-1.44c-.15-.02-.66-.062-1.253-.062-1.238 0-2.084.749-2.084 2.125v1.185L7 7.354v1.609l1.23.004V13H3.5c-.835 0-1.5-.665-1.5-1.5v-8C2 2.665 2.665 2 3.5 2z" />
    </svg>
)}
function ContactCard({name,role,img,i,insta,linkd,fb,email}) {
  const [hover,setHover]=useState(false);
    return (
        <motion.div
                variants={animMainDiv}
                initial={{opacity:0 }}
                animate={{opacity:1,transition:{delay: i*0.2} }}
                exit="exit"
                onMouseEnter={()=>setHover(true)} // Or onMouseOver
                onMouseLeave={()=>setHover(false)}
                className="my-12 mx-8 transition-all duration-500 flex flex-col rounded-md"
                // style={{padding:'1rem',border: '2px solid ',borderColor: '#f3e8ff',backgroundColor:'#faf5ff',...hover && {borderColor: '#e9d5ff',backgroundColor: '#f3e8ff'}}}
                
                >
            
            <div
              className="transition-all bg-purple-100 hover:bg-purple-300 flex justify-end rounded-full  border-8 lg:w-36 md:w-32 w-24 lg:h-36 md:h-32 h-24 border-white shadow-md border-double" >
              <img className="-mt-12 rounded-b-full transition-all duration-500 lg:w-36 md:w-32 w-24 lg:h-44 md:h-40 h-32   object-cover" style={{filter: 'grayscale(100%)',...(hover && {filter: 'grayscale(0%)'})}} src={img} alt=""/>
            </div>
            <h1 className="font-treb text-xl mx-auto mt-3 text-gray-500">{name}</h1>
            <h1 className="font-treb text-base mx-auto text-gray-300">{role}</h1>
            <div className="flex justify-between mt-2 text-gray-400 stroke-current ">
              {[insta,linkd,fb,email].map((data,index)=>
                (data&&<div className="hover:text-fuchsia-200 transition-all" onClick={()=>window.location.assign(data)}>
                  {[<Insta/>,<Linkd/>,<Fb/>,<Gmail/>][index]}</div>))}
              
            </div>
        </motion.div>
    )
}

export default ContactCard
