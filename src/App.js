import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Featured from "./routes/Featured";
import Signup from "./routes/Signup";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        


      </Routes>
    </>
  );
}

export default App;
