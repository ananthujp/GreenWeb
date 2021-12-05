function Blogs() {

    const randomcall=()=>{
        return("AAA");
    }

    return (
        <div className="flex flex-col w-screen">
            <div>NavBar{randomcall()}</div>
            <div className="flex flex-row">
                <div>Logo</div>
                <div className="flex flex-col">
                    <h1>Title</h1>
                    <h1>Content</h1>
                </div>
            </div>
        </div>
    )
}

export default Blogs
