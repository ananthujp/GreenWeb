import Logo from "./vectors/about.svg"
function About() {
    return (
        <div>
            <div className="w-full mt-12 flex flex-col ">
            <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
                
            <div className="md:w-3/5 w-full  mx-auto">
                <img src={Logo} alt=""/>
            </div>
            <h1 className="font-beb mt-10 text-purple-300 mx-auto lg:text-8xl md:text-6xl text-4xl">ABOUT US</h1>
            <h1 className="ftext-center mx-auto font-treb text-md text-purple-300">Lorem Ipsum</h1>
        </div>
        </div>
        </div>
    )
}

export default About
