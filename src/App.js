import './App.css';
import Header from './components/header/Header';
import SectionOne from './components/section_one/section_one';
import Header from "./components/header/Header";
import EccoSystem from "./screens/eccoSystem/eccoSystem";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne/>
      {/* <Header /> */}
      <Header />
      <Footer />
    </div>
  );
}

export default App;
