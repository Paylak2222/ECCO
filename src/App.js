import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/Header';
import SectionOne from './components/section_one/section_one';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne/>
      {/* <Header /> */}
    </div>
  );
}

export default App;
