export function ProjectCard({title,image,description,viewCodeLink,liveCodeLink}){
    function viewCodeNavigate(){
        window.location.href=viewCodeLink;
    }
    function liveCodeNavigate(){
        window.location.href=liveCodeLink;
    }
    return(
    <div className="h-[520px] md:h-[640px] md:w-[440px] cursor-pointer rounded-lg shadow-2xl border-2 border-green-500 hover:scale-110 duration:300">
         <img className="w-full h-1/2 p-6 md:p-3" src={image} alt="reactjs" />
        <h6 className="text-center mb-2 px-2 font-bold text-base md:text-xl">{title}</h6>
        <p className="px-2 py-0 md:px-4 md:py-2 text-gray-700 text-justify text-sm md:text-base">{description}</p>
        <div className="flex justify-between px-2 py-1 md:px-4 md:py-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white md:font-bold px-4 py-2 my-4 rounded text-sm md:text-base" onClick={viewCodeNavigate}>View Code</button>
            <button className="bg-green-500 hover:bg-green-700 text-white md:font-bold px-4 py-2 my-4 rounded text-sm md:text-base" onClick={liveCodeNavigate}>Live Code</button>
        </div>
    </div>)
}