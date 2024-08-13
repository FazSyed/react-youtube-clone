import "./App.css";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";

const App = () => {
  return (
    // Class Naming convention - BEM
    <div className="app">
      <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default App;
