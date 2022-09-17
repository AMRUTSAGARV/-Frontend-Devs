import React from "react";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import SearchFilter from "./components/SearchFilter";
import UserFooter from "./components/UserFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SearchFilter />
      <Feature />
      <Product />
      <UserFooter />
    </div>
  );
}

export default App;
