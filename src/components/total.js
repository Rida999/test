import Blogs from "./blogs";
import Blogs2 from "./blogs2";

const Total = () => {
    return ( 
        <div className="flex flex-1 sm:flex-row  flex-col transition-all">
            <Blogs />
            <Blogs2 />
        </div>
     );
}
 
export default Total;