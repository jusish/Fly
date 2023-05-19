import "./App.css";
import Navbar from "../src/Components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Header from "./Components/header";
import Body from "./Components/body";


function App() {
  return (
    <div className="app col-12">
      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/contacts" element={Contacts} />
          <Route path="/about" element={About} />
        </Routes>
        <Navbar />
        <Header />
        <Body />
      </Router>
    </div>
  );
}

export default App;
