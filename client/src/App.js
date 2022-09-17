import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SearchFilter />
    </div>
  );
}

export default App;
