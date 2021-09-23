import Blogs from "./components/blogs";
import Left from "./components/leftmenu";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Left />
      <Blogs />
    </div>
  );
}

export default App;
