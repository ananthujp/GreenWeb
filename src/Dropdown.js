import {useState,useEffect} from "react"
import { setbatch} from './features/userSlice';
import {useDispatch} from "react-redux"
function Dropdown() {
    const [visible,setVisible]=useState(false);
    const [batch,setBatch]=useState("1.Select Role");
    const handleVisibility=()=>setVisible(!visible)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            setbatch({
            batch: (batch!=="1.Select Role")?batch:null
          }));
    }, [batch])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="relative">
        <div>
    <button type="button" onClick={handleVisibility} class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      {batch}
      
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

 {visible?
  <div 
    
    class="origin-top-center absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1 " role="none">
      <div onClick={()=>{setBatch("B.Tech Student");handleVisibility()}} class="text-gray-700 block px-4 py-2 text-sm text-center hover:bg-purple-50" role="menuitem" tabindex="-1" id="menu-item-0">B.Tech Student</div>
      <div onClick={()=>{setBatch("M.A/M.Tech/MSc  Student");handleVisibility()}} class="text-gray-700 block px-4 py-2 text-sm text-center hover:bg-purple-50" role="menuitem" tabindex="-1" id="menu-item-1">M.A/M.Tech/MSc  Student</div>
      <div onClick={()=>{setBatch("PhD  Student");handleVisibility()}}  class="text-gray-700 block px-4 py-2 text-sm text-center hover:bg-purple-50" role="menuitem" tabindex="-1" id="menu-item-2">PhD  Student</div>
      <div className=" border-t border-gray-100 w-full"></div>
      <div onClick={()=>{setBatch("Staff");handleVisibility()}} class="text-gray-700 block px-4 py-2 text-sm text-center hover:bg-purple-50" role="menuitem" tabindex="-1" id="menu-item-2">Staff</div>
      <div onClick={()=>{setBatch("Faculty");handleVisibility()}} class="text-gray-700 block px-4 py-2 text-sm text-center hover:bg-purple-50" role="menuitem" tabindex="-1" id="menu-item-2">Faculty</div>
      
      
    </div>
  </div>:<></>
}
  </div>
    )
}

export default Dropdown
