import { collection, addDoc } from "firebase/firestore"; 
import {db,provider,auth} from "./firebase"
import {useSelector} from "react-redux"
import { selectUser,selectBatch ,login,logout } from './features/userSlice';
import { signInWithPopup} from "firebase/auth";
import {useDispatch} from "react-redux"
import {useEffect,useState} from "react"
import Dropdown from "./Dropdown"
import {serverTimestamp} from "firebase/firestore"
// Add a new document in collection "cities"

function FbInput({img,name,batch}) {

    const user=useSelector(selectUser);
    const batchrole=useSelector(selectBatch);
    const dispatch = useDispatch();
    const [batchHint,setBatchHint]=useState("ml-1");
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
        signInWithPopup(auth, provider):setBatchHint("font-bold ml-1 text-red-600 animate-pulse")
    });
    const checkLogin=()=>(batchrole &&(batchrole.batch!=null)?null:dispatch(
      logout()))

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
                            <textarea id="fbInputMsg" className="w-full placeholder-gray-400 text-gray-800" placeholder="Whats on your mind!" name="Text1" cols="40" rows="3"></textarea>
                            <div className="w-full flex border-t border-gray-100">
                            <button onClick={handleWrite} class="mt-4 my-auto ml-auto px-6 py-3 text-sm transition-all text-white bg-purple-600 font-semibold rounded-3xl border border-purple-200 hover:text-white hover:bg-purple-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Submit</button>
                            </div>
                        </blockquote>
                        </figure>:
                        <figure className="shadow-lg rounded-xl flex-none md:w-xl">
                        
                        <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-t-xl leading-6 font-semibold text-white from-purple-500 to-indigo-500">
                            
                                <div className="flex-auto px-4 text-xl">Login<br/>
                                </div>
                                <cite className="flex"><div href="" className="opacity-50 hover:opacity-75 transition-opacity duration-200 cursor:pointer">
                                    <span className="sr-only">Original tweet by Guillermo Rauch</span>
                                    <svg width="33" height="32" fill="currentColor"><path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z">
                                        </path></svg></div></cite></figcaption>
                            <blockquote className="rounded-b-xl bg-white px-6 py-4 md:p-6 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                            <div className="mb-5 fill-current text-gray-400 font-thin flex flex-row"> Please select your <div className={batchHint}>role</div></div>

                            <Dropdown/>
                            <div class="relative inline-block text-left">
  
</div>



                            <div className="w-full flex border-t border-gray-100">
                            <button onClick={handleLogin} class="mt-4 flex flex-row my-auto mx-auto px-6 py-3 text-sm transition-all text-white bg-purple-600 font-semibold rounded-3xl border border-purple-200 hover:text-white hover:bg-purple-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Login</button>
                            </div>
                        </blockquote>
                        </figure>
                        
                        
                        }
        </div>
    )
}

export default FbInput
