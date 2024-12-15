import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SectionOne from "./components/section_one/section_one";
import EccoExplore from "./screens/eccoExplore/eccoExplore";
import EccoSystem from "./screens/eccoSystem/eccoSystem";
import Home from "./screens/home/home";
import PrivacyPolicy from "./screens/privacyPolicy/privacyPolicy";
import TermsConditions from "./screens/termsConditions/termsConditions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<EccoExplore />} />
          <Route path="/system" element={<EccoSystem />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
