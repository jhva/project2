
import React from "react";
import "./SearchBar.css"

const SearchBar = ({ results, keyword, updateField }) => {
  //renders our results using the SearchPreview component
  var updateText = text => {
    updateField("keyword", text, false);
    updateField("results", []);
  };



  var renderResults = results.map(({ title, name }, index) => {
    return (
      <SearchPreview
        key={index}
        updateText={updateText}
        index={index}
        title={title}
        name={name}
       
      />
    );
  });
  return (
    <div className="auto">
     
      <input
        className="app-b"
        placeholder="Search"
        value={keyword}
        onChange={e => updateField("keyword", e.target.value)}
      />

      {results.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
    </div>
  );
};

//stateless component to render preview results
const SearchPreview = ({  name, title, index, updateText }) => {
  return (
    <div
      onClick={() => updateText(name)}
      className={`search-preview ${index == 0 ? "start" : ""}`}
    >
      <div className="first">
        <p className="name">{name}</p>
        <p className="sub-header">{title}</p>
      </div>
     
    </div>
  );
};

export default SearchBar;

