
const Left = () => {
  return (
    <nav
      style={{
        alignSelf: "stretch",
      }}
    >
      <div style={{ height: "100%",display:"flex",flexDirection:"column",position:"sticky" }} className="border-r-2 flex-1 md:w-44 w-32 transition-all border-black border-opacity-40">
        <button className="h-20 border-b-4 flex-grow"><i class="fas fa-home text-5xl"></i></button>
        <button className="h-20 border-b-4 flex-grow"><i class="fas fa-address-book text-5xl"></i></button>
        <button className="h-20 border-b-4 flex-grow"><i class="fab fa-app-store-ios text-5xl"></i></button>
        <button className="h-20 border-b-4 flex-grow"><i class="fas fa-apple-alt text-5xl"></i></button>
        <button className="h-20 border-b-4 flex-grow"><i class="fab fa-android text-5xl"></i></button>
        <button className="h-20 border-b-4 flex-grow"><i class="fab fa-artstation text-5xl"></i></button>
        <button className="h-20 border-b-4 flex-grow"><i class="fab fa-asymmetrik text-5xl"></i></button>
        <button className="h-20 border-b-4 flex-grow"><i class="fas fa-ad text-5xl"></i></button>
      </div>
    </nav>
  );
};

export default Left;
