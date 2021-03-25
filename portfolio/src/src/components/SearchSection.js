import React from 'react';
import VideoResult from './VideoResult.js';


export default function SearchSection(props) {
  const _searchresults = props.searchResults;
  const addQueue = props.addQueue;
  
  //compiles multiple VideoResult components into an array to be displayed within render()
  const compileResults = (num) => {
    const searchresults = [];
    for (var i=num;i<_searchresults.length;i+=2) {
      searchresults.push(<VideoResult index = {i} key={i} video={_searchresults[i]} addQueue={addQueue}/>);
    }
    return searchresults;
  }

  return(
      
      <div className="searchSection">
        <div className="searchheader">
          <h1>Search Results</h1>
        </div>
        <div className="searchvideos">
          <div className="left-column">
          {compileResults(0)}
          </div>
          <div className="right-column">
          {compileResults(1)}
          </div>
        </div>
      </div>
  );
  
}