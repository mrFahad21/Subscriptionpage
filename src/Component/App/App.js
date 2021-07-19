
import React from 'react';
import './App.css';
import Spotify from '../../Util/Spotify';
import NewComp from './NewComp';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Track from '../Track/Track';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  styles = {
    fontStyle : "bold",
    color: "teal"
  }
  constructor(props) {
    super(props)
  
    this.state = {
      searchResults: [],
      playlistName: "New playlist",
      playlistTracks: []
    };
    this.search=this.search.bind(this);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePLName=this.updatePLName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.removeTrackSearch=this.removeTrackSearch.bind(this);
    this.doThese=this.doThese.bind(this);
  }


  search(term){
    Spotify.search(term).then(searchResults=>{
      this.setState({searchResults: searchResults});
    });
  }

  addTrack(track){
    let tracks=this.state.playlistTracks;
    if (tracks.find(savedTracks => savedTracks.id === track.id)){
       return;
     }
     tracks.push(track);
     this.setState({playlistTracks: tracks});
    }
  
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    let trackSearch = this.state.searchResults;
    tracks=tracks.filter(curretTrack => curretTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrackSearch(track){
    let tracks = this.state.searchResults;
    tracks = tracks.filter(curretTrack => curretTrack.id !== track.id);
    this.setState({searchResults: tracks});
  }

  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }

  updatePLName(name){
    this.setState({updatePLName: name});
  }

  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName.trackUris).then( () => {
      this.setState({
        updatePLName: "My Playlist",
        playlistTracks:[]
      });
    });
  }

  render() {
    return (
    <div className="App">
      <h1 style={this.styles}> Hello!
      <a href="http://localhost: 3000">It's Musicophile</a>
      </h1>
      <NewComp />
      <SearchBar onSearch = {this.search} />
      <div className="App-playlist">
        <SearchResults SearchResults={this.state.SearchResults} onAdd={this.doThese} />
        <Playlist playlistTracks={this.playlistTracks} onNameChange={this.updatePLName} onRemove={this.removeTrack} onSave={this.savePlaylist}/>
      </div>
    </div>
    );
  }
}

export default App;