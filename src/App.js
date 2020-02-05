import React from "react";
import "./App.css";
import NasaDataList from './Components/DataList/NasaDataList';
import NavBar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="">
        <NasaDataList />
      </div>
    </div>
  );
}

export default App;
