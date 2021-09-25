const Each = (props) => {
    return ( <div className="m-auto lg:max-h-36 max-w-xs transition-all lg:max-w-sm items-center flex flex-col lg:flex-row rounded-lg shadow-xl bg-white mt-16">
    <div className="my-4 mx-7">
      <img
        className="h-24 w-24 mt-2 rounded-full shadow-md object-cover object-top"
        src={props.img}
        alt={props.alt}
      />
    </div>
    <div className="flex flex-col h-28" style={{alignItems:"center",justifyContent:"center"}}>
      <h1 className="font-bold text-lg">{props.name}</h1>
      <h2 className="text-base text-gray-400">{props.job}</h2>
      <button className="rounded-full text-purple-600 font-semibold border-2 mt-2 w-24 h-7 hover:text-white hover:bg-purple-600 hover:border-transparent">
      <a href="mailto:ridaajam999@gmail.com">Message</a>
      </button>
    </div>
  </div> );
}
 
export default Each;