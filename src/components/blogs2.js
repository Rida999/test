import Each from "./eachblog";

const Blogs2 = () => {
  return (
    <div style={{ flex: 1,maxHeight:"50%",minWidth:"40%" }}>
      <Each name="Robert Torres" job="Civil Engineer" alt="civil engineer img" img="https://www.srmarticles.com/wp-content/uploads/2019/12/civil-engineer.jpg" />
      <Each name="Lorem kardishyen" job="Artist" alt="artist img" img="https://www.yourfreecareertest.com/wp-content/uploads/2016/07/artist.jpg"/>
      <Each name="Yara Robenson" job="Football player" alt="football player img" img="https://sillyseason.com/wp-content/uploads/2018/06/Countries-With-The-Hottest-Female-Football-Fans-Spain-fans-hot.jpg" />
    </div>
  );
};

export default Blogs2;