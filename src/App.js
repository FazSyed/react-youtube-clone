import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/Search/SearchPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        {/* The Header will always appear, regardless of which page we are in... */}
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <div className="app__page">
                  <Sidebar />
                  <RecommendedVideos />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
