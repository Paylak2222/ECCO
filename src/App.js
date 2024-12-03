import "./App.css";
import SectionOne from "./components/section_one/section_one";
import EccoExplore from "./screens/eccoExplore/eccoExplore";
import EccoSystem from "./screens/eccoSystem/eccoSystem";

function App() {
  return (
    <div className="App">
      {/* <EccoSystem /> */}
      <EccoExplore/>
    </div>
  );
}

export default App;
