import { collection, addDoc } from "firebase/firestore"; 
import {db,provider,auth} from "./firebase"
import {useSelector} from "react-redux"
import { selectUser,selectBatch ,login,logout } from './features/userSlice';
import { signInWithPopup} from "firebase/auth";
import {useDispatch} from "react-redux"
import {useEffect,useState} from "react"
import Dropdown from "./Dropdown"
import {serverTimestamp} from "firebase/firestore"
import { GIcon } from "./vectors/importSVG";
// Add a new document in collection "cities"

function FbInput({img,name,batch}) {

    const user=useSelector(selectUser);
    const batchrole=useSelector(selectBatch);
    const dispatch = useDispatch();
    const [batchHint,setBatchHint]=useState("mt-4");
    const handleWrite = (()=>{addDoc(collection(db, "docs"), {
        name: user.displayName,
        batch: batchrole.batch,
        msg: document.getElementById("fbInputMsg").value,
        img: user.photo,
        email: user.email,
        date:serverTimestamp(),
        like: "0",
      });
      document.getElementById("fbInputMsg").value=""
    });
    const handleLogin = (()=>{
        (batchrole.batch)?
        signInWithPopup(auth, provider):setBatchHint("ring-2 transition-all ring-red-600 rounded-md mt-4 text-red-600 animate-pulse")
    });
    const checkLogin=()=>(batchrole &&(batchrole.batch!=null)?null:dispatch(
      logout()))
    useEffect(() => {
      batchrole&&batchrole.batch&&setBatchHint("mt-4")
    }, [batchrole])

    useEffect(() => {
     
    auth.onAuthStateChanged((authUser)=> {
      if(authUser){
          dispatch(
            login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName:authUser.displayName,
            batch: batchrole?batchrole.batch:null,
            
          }));
      }else{
        dispatch(
          logout());
      }
    })
  }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps
  checkLogin();
    return (
      <div className="md:w-1/3 w-full h-128">
        <div className="px-3 md:px-4 flex-none my-4 w-full">
                    {(user&&user.email)?<figure className="shadow-lg rounded-xl flex-none md:w-xl">
                        
                        <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-t-xl leading-6 font-semibold text-white from-purple-500 to-indigo-500">
                            <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                <img src={user.photo} alt="" className="w-12 h-12 rounded-full bg-purple-100" loading="lazy"/></div>
                                <div className="flex-auto">{user.displayName}<br/>
                                <span className="text-purple-100">{user.batch}</span></div>
                                <cite className="flex">
                                    <div 
                                     onClick={()=>auth.signOut()} 
                                    className="opacity-50 hover:opacity-75 transition-opacity duration-200 cursor-pointer">
                                    <span className="sr-only">Original tweet by Guillermo Rauch</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
                                        
                                        </div></cite></figcaption>
                            <blockquote className="rounded-b-xl bg-white px-6 py-4 md:p-6 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                            <svg width="45" height="36" className="mb-5 fill-current text-purple-100" >
                                <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                </path>
                            </svg>
                            <textarea id="fbInputMsg" className="w-full placeholder-gray-400 outline-none focus:bg-purple-50 rounded-xl p-2 text-gray-600" placeholder="Whats on your mind!" name="Text1" cols="40" rows="3"></textarea>
                            <div className="w-full flex border-t border-gray-100">
                            <button onClick={handleWrite} class="mt-4 my-auto ml-auto px-6 py-3 text-sm transition-all text-white bg-purple-600 font-semibold rounded-3xl border border-purple-200 hover:text-white hover:bg-purple-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Submit</button>
                            </div>
                        </blockquote>
                        </figure>:
                        <figure className="shadow-lg rounded-xl flex-none md:w-xl">
                        
                        <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-t-xl leading-6 font-semibold text-white from-purple-500 to-indigo-500">
                            
                                <div className="flex-auto px-4 text-xl"> Login<br/>
                                </div>
                                <cite className="flex"><div href="" className="opacity-50 hover:opacity-75 transition-opacity duration-200 cursor:pointer">
                                    <span className="sr-only">Original tweet by Guillermo Rauch</span>
                                     <svg  width="33" height="32" 
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__h-5 prefix__w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg></div></cite></figcaption>
                            
                            <blockquote className="rounded-b-xl bg-white px-6 py-4 md:p-6 text-base md:text-lg leading-8 md:leading-8 font-semibold text-gray-900">
                            <div className="mb-5 fill-current text-gray-400 font-thin flex flex-row text-left text-base"> Start posting feedbacks by selecting your role followed by login with your Google ID. </div>

                            
                           
                            <div className="w-full items-center flex border-t border-gray-100">
                            <div className={batchHint}><Dropdown/></div>
                            <button onClick={handleLogin} class="mt-4 flex flex-row my-auto mx-auto px-6 py-2 text-sm items-center transition-all text-gray-600 bg-gray-50 font-semibold rounded-3xl border border-purple-200 hover:text-gray-800 hover:bg-gray-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"><GIcon/>&nbsp; 2. Login</button>
                            </div>
                        </blockquote>
                        </figure>
                        
                        
                        }
        </div>
        </div>
    )
}

export default FbInput
