import "./App.css";
import SectionOne from "./components/section_one/section_one";
import EccoExplore from "./screens/eccoExplore/eccoExplore";
import EccoSystem from "./screens/eccoSystem/eccoSystem";
import Home from "./screens/home/home";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <EccoExplore />
      {/* <EccoSystem /> */}
    </div>
  );
}

export default App;
