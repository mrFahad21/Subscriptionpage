import React, { Component } from 'react';
import "../TrackList/TrackList.css";
import TrackList from "../TrackList/TrackList";


class SearchResults extends React.Component {
    render() { 
        return (
            <div className="Searchresults">
                <h2>Results</h2>
                <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd}/>
            </div>
        );
    }
}

export default SearchResults;
