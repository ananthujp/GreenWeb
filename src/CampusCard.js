import CampusScreen from "./CampusScreen"
import {setSlideScreen,selectcampslideshow} from "./features/appSlice";
import {useSelector,useDispatch} from "react-redux"

function CampusCard({title,details,logo,images,i}) {
    const dispatch = useDispatch();
    const showSlideShow=useSelector(selectcampslideshow)
    const ImgComp=({imguri,flip})=>{return(
        <div className="w-full">
        {flip?<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 735 605"
            style={{
            enableBackground: "new 0 0 735 605",
            }}
            xmlSpace="preserve"
            
        >
            <path
            d="M224 216s271.5 4.2 378 45c81 31 134 96 109 188s-185 111-340 79S72.2 409.6 65 345c-6-54-16-122 159-129z"
            style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 4,
                strokeMiterlimit: 10,
            }}
            />
            <path
            d="M177 450s40 74 213 127 219-89 219-89 69-244 52-365-89-106-123-83S90 396 177 450z"
            style={{
                fill: "#bc99ff",
            }}
            />
            <defs>
            <path
                id="a"
                d="M74 296s114 6 164-141S457-15 529 35s123.6 122 141.3 267S642 512 466 528s-229-1-317-11S11 394 12 353s30-53 62-57z"
            />
            </defs>
            <clipPath id="b">
            <use
                xlinkHref="#a"
                style={{
                overflow: "visible",
                }}
            />
            </clipPath>
            <g
            style={{
                clipPath: "url(#b)",
            }}
            >
            <image
                style={{
                overflow: "visible",
                }}
                width={1230}
                height={686}
                xlinkHref={imguri}
                transform="translate(-177 11) scale(.8616)"
            />
            </g>
        </svg>:
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 735 605"
        style={{
          enableBackground: "new 0 0 735 605",
        }}
        xmlSpace="preserve"
        
      >
        <path
          d="M224 216s271.5 4.2 378 45c81 31 134 96 109 188s-185 111-340 79S72.2 409.6 65 345c-6-54-16-122 159-129z"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 4,
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M177 450s40 74 213 127 219-89 219-89 69-244 52-365-89-106-123-83S90 396 177 450z"
          style={{
            fill: "#bc99ff",
          }}
        />
        <defs>
          <path
            id="a"
            d="M590 296s-76.1 28-122-119S238.1-15 171.9 35 58.3 157 42.1 302s26 210 187.7 226 210.4-1 291.3-11S647.9 394 647 353c-.9-41-27.6-53-57-57z"
          />
        </defs>
        <clipPath id="b">
          <use
            xlinkHref="#a"
            style={{
              overflow: "visible",
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#b)",
          }}
        >
          <image
            style={{
              overflow: "visible",
            }}
            width={1230}
            height={686}
            xlinkHref={imguri}
            transform="translate(-177 11) scale(.8616)"
          />
        </g>
      </svg>
        }
        </div>
    )}
    const gDriveuri=(uri)=>{return(uri?"https://drive.google.com/uc?export=view&id="+uri:"https://drive.google.com/uc?export=view&id="+uri)}
    return (
        <li key={`li-comp${i}`} className="flex w-full md:flex-row flex-col items-center my-16">
            {showSlideShow?<CampusScreen/>:<></>}
            {(i%2===0)&&<ImgComp
            imguri={gDriveuri(logo)} key={`img-r-comp${i}`} flip={true}/>}
            <div className="mx-2 justify-center flex flex-col w-3/4">
                <div className="font-treb text-3xl my-1 text-white">{title}</div>
                <div>{details}</div>
                <button 
                  onClick={()=>dispatch(setSlideScreen({CampSlideShow:images}))}
                  className="py-2 my-4 px-4 bg-white text-indigo-500 font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">View More</button>
            </div>
            {(i%2!==0)&&<ImgComp
            imguri={gDriveuri(logo)} key={`img-l-comp${i}`} />}
        </li>
    )
}

export default CampusCard
