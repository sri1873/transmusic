import Home from './Components/Home';
import React from "react";
import Navbar from "./Components/Navbar";
import About from './Components/About';
function App() {
  return (
    <div className="App bg-neutral-100">
      <Navbar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
