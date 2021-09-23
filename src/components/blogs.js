const Blogs = () => {
    return ( 
    <div>
        <div className="m-auto max-h-36 max-w-sm items-center flex rounded-lg shadow-xl bg-white mt-32">
            <div className="my-4 mx-7">
                <img className="h-24 w-24 mt-5 rounded-full shadow-md object-cover object-top" src="https://i.pinimg.com/564x/74/fb/ae/74fbae9715ab886eb7321d68fdc71e47.jpg" alt="womans face" />
            </div>
            <div className="flex flex-col h-28 mr-4">
                <h1 className="font-bold text-lg">Erin Lindford</h1>
                <h2 className="text-base text-gray-400">Product Engineer</h2>
                <button className="rounded-full text-purple-600 font-semibold border-2 w-24 h-7 hover:text-white hover:bg-purple-600 hover:border-transparent">Message</button>
            </div>
        </div>
    </div>
     );
}
 
export default Blogs;