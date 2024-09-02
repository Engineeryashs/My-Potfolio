export function Skills(){
    let skillSet=[
            {
                logo:"/html.png",
                title:"HTML",
            },
            {
                logo:"/css.jpg",
                title:"CSS3",
            },
            {
                logo:"/javascript.png",
                title:"Javascript",
            },
            {
                logo:"/mongodb.jpg",
                title:"MongoDB",
            },
            {
                logo:"/express.png",
                title:"Express",
            },
            {
                logo:"/reactjs.png",
                title:"ReactJS",
            },
            {
                logo:"/node.png",
                title:"NodeJS",
            },
        ]
return(<div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
    <h1 className="md:text-3xl text-2xl font-bold mb-5">Skills</h1>
    <p className="text-sm md:text-base mb-4">The listed are my skills and i am having good experince in the below technologies.</p>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
    {
        skillSet.map(function(ele,index){
         return (<div key={index} className="md:w-[200px] md:h-[200px] rounded-full flex flex-col justify-center items-center border-[2px] hover:scale-110 duration-300 cursor-pointer">
            <img src={ele.logo} alt="my-skills" className="rounded-full w-[150px] p-1"/>
            <div>
                <div>{ele.title}</div>
            </div>
         </div>)
        })
    } 
    </div>
   
</div>)
}