import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <h2>Filters</h2>
        <TuneOutlinedIcon />
      </div>
      <hr />
    </div>
  );
};

export default SearchPage;
