import React, { Component } from 'react';
import "./Playlist.css";
import TrackList from "../Track/Track";
import Track from '../Track/Track';


class Playlist extends Component {

    constructor(props) {
        super(props);
    
        this.handleNameChange=this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    
    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={"New Playlist"}/>
                <TrackList track={this.props.PlaylistTracks}
                isRemoval={true}
                onRemove={this.props.onRemove} />
                <button className="PLaylist-save" onClick={this.props.onSave}>Save to spotify</button>
            </div>
        );
    }
}

export default Playlist;
