import Each from "./eachblog";

const Blogs = () => {
  return (
    <div style={{ flex: 1,maxHeight:"50%" }}>
      <Each name="Andrew Tekli" job="Dentist" alt="dentist img" img="https://images.squarespace-cdn.com/content/v1/5269fbd3e4b0eb2b76ccc1db/1582313117687-0T3XFNHLID9962LQLHIQ/how-to-become-a-dentist.jpg"/>
      <Each name="Erin Richard" job="Product Engineer" alt="product engineer img" img="https://i.pinimg.com/564x/74/fb/ae/74fbae9715ab886eb7321d68fdc71e47.jpg"/>
      <Each name="Ibraham Nara" job="Surgeon" alt="surgeon img" img="https://s3-us-west-2.amazonaws.com/melingoimages/Images/93969.jpg" />
    </div>
  );
};

export default Blogs;
