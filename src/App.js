import Left from "./components/leftmenu";
import Total from "./components/total";

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
      <Total />
    </div>
  );
}

export default App;
