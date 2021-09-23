import Blogs from "./components/blogs";
import Left from "./components/leftmenu";

function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Left />
      <Blogs />
    </div>
  );
}

export default App;
