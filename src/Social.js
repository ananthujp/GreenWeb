import {motion} from "framer-motion"
import {animImg,animH1,animH2,animMainDiv} from "./Animations"
import {FbIcon, InstaIcon, SocialSVG, TwitterIcon} from "./vectors/importSVG"
import Embedo from "embedo"
import { useRef, useEffect, useState } from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';
function getSampleEmbeds(socialClr) {
    if(socialClr==='insta')
	return ([
		{
			id: "embed-1",
			name: "embed instagram",
			loaded: false,
			url: "https://www.instagram.com/p/CV2vD2nDah0/",
			options: {
				hidecaption: false,
                
			}
		},
		{
			id: "embed-2",
			name: "embed instagram",
			loaded: false,
			url: "https://www.instagram.com/p/CT3_8ErAtH2/",
			options: {
				hidecaption: false,
               
			}
		},
		{
			id: "embed-3",
			name: "embed instagram",
			loaded: false,
			url: "https://www.instagram.com/p/CT3_cCRA5dE/",
			options: {
				hidecaption: false,
                
			}
		},
		{
			id: "embed-4",
			name: "embed instagram",
			loaded: false,
			url: "https://www.instagram.com/p/CTzcsCijZdh/",
			options: {
				hidecaption: false,
                
			}
		},
		{
			id: "embed-5",
			name: "embed instagram",
			loaded: false,
			url: "https://www.instagram.com/p/CTynFNSgyRr/",
			options: {
				hidecaption: false,
                
			}
		},
		{
			id: "embed-6",
			name: "embed instagram",
			loaded: false,
			url: "https://www.instagram.com/p/CTwAEa2jKqX/",
			options: {
				hidecaption: false,
                
			}
		},
	])
    else
    return ([
		{
			id: "embed-2",
			name: "embed tweets grid",
			loaded: false,
			url: "https://twitter.com/iitgn_green/timelines/1479682585114537990",
			options: {
				widget_type: "grid",
				width: 750
			}
		},
		
	]);
}
const EmbedoItem = ({ id, name, href, ...props }) => {
    const ref = useRef();
    const embedo = new Embedo({
        facebook: {
            version: "v8.0",
            appId: "180015362652616",
            access_token: "180015362652616|fb4b1e9203a607f5e9d9d49c666ee200",
            xfbml: true
        },
        twitter: true,
        instagram: {
            access_token: "180015362652616|fb4b1e9203a607f5e9d9d49c666ee200"
        },
        pinterest: true
    });
    useEffect(() => {
        let options = props["data-options"] || {};
        embedo
            .load(ref.current, href, options)
    }, [href]);
    return (
        <a className="w-4/5 mx-auto shadow-md " ref={ref} key={id} href={href}>
        </a>
    );
}    
function Social() {
    const [socialClr,setSocial]=useState('twitter')
    return (
        <motion.div
            variants={animMainDiv}
            initial="initial"
            animate="animate"
            exit="exit">
            <div className="w-full mt-12 flex flex-col ">
            <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
                
            <motion.div
                variants={animImg}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full  mx-auto">
                <SocialSVG />
            </motion.div>
            <motion.h1
                variants={animH1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-beb mt-10 text-purple-300 mx-auto lg:text-8xl md:text-6xl text-4xl">SOCIAL MEDIA</motion.h1>
            <motion.h1
                variants={animH2}
                initial="initial"
                animate="animate"
                exit="exit"
                className="ftext-center mx-auto font-treb text-md text-purple-300">Connect with us</motion.h1>
            <div className="flex rounded-3xl w-full overflow-hidden bg-gray-50 border-2 border-gray-100  justify-between my-8">
                <div onClick={()=>setSocial('twitter')} className={"hover:bg-gray-100 cursor-pointer md:py-4 md:px-4 py-1 px-1 flex flex-row items-center justify-center "+((socialClr==='twitter')?'bg-gray-200':'bg-gray-50')}>
                    <TwitterIcon/>
                    <h1 className='md:flex hidden'>Twitter</h1>
                </div> 
                <div onClick={()=>setSocial('insta')} className={"hover:bg-gray-100 cursor-pointer  md:py-4 md:px-4 py-1 px-1 flex flex-row items-center justify-center "+((socialClr==='insta')?'bg-gray-200':'bg-gray-50')}>
                    <InstaIcon/>
                    <h1 className='md:flex hidden'>Instagram</h1>
                </div> 
                <div onClick={()=>setSocial('fb')} className={"hover:bg-gray-100 cursor-pointer md:py-4 md:px-4 py-1 px-1 flex flex-row items-center rounded-r-3xl justify-center"+((socialClr==='fb')?'bg-gray-200':'bg-gray-50')}>
                    <FbIcon/>
                    <h1 className='md:flex hidden'>Facebook</h1>
                </div> 
                </div>
        </div>

        {getSampleEmbeds(socialClr).map((embed, key) => (
				<EmbedoItem
					key={key}
					id={embed.id}
					href={embed.url}
					name={embed.name}
                    
					data-options={embed.options || {}}
				/>
			))}
        </div>
        </motion.div>
    )
}

export default Social
