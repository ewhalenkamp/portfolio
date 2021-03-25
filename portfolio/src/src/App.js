
import './App.css';
import Search from './components/Search.js';
import MediaPlayer from './components/MediaPlayer.js';
import SearchSection from './components/SearchSection.js';
import QueueSection from './components/QueueSection.js';
import PlayButton from './components/PlayButton.js';
import SkipButton from './components/SkipButton.js';
import React from 'react';
import ReactYT from 'react-youtube';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      pause: false,
      player: ReactYT.Player,
      searchResults: [],
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return;
  }

  addQueue = video => {
    if (!this.state.queue.includes(video)) {
      const queue = this.state.queue;
      
      queue.push(video);
      this.setState({queue: queue});
    }
    else alert("Video is already in the queue. Duplicates are not allowed.")
  }

  onPlayPause = () => {
    const pause = !this.state.pause;
    if (pause) 
      this.state.player.pauseVideo();
    else 
      this.state.player.playVideo();
      
    this.setState({pause});
    console.log(this.state.player);
  }

  updateSearchResults = (searchResults) => {
    this.setState({searchResults});
  }

  onSkip = () => {
    const queue = this.state.queue;
    queue.shift();
    this.setState({queue});
  }

  removeFromQueue = (video) => {
    const queue = this.state.queue;
    const index = queue.indexOf(video);
    if (index > -1) {
      queue.splice(index, 1);
    }
    this.setState({queue});
  }

  render() {
    //potential fix to queue not updating render, just perform the following function internally within mediaplayer and pass in
    //queue as props
    var id = "0";
    var vid = null;
    if (this.state.queue[0])
      id = this.state.queue[0].id.videoId;
      vid = this.state.queue[0];
    return (
      <div className="multimusicplayer">
        <a href="/projects/1" title="Back to Project Page"><i className="ri-arrow-left-line"></i></a>
        <SearchSection searchResults={this.state.searchResults} addQueue={this.addQueue}/>
        <MediaPlayer video={vid} onVideoEnd={this.onSkip} videoId={id} changeVideoPlayer={(player) => {this.setState({player});}}/>
        <Search updateSearchResults={this.updateSearchResults}/>
        <PlayButton onPlayPause = {this.onPlayPause} pause={this.state.pause}/>
        <SkipButton onSkip = {this.onSkip}/>
        <QueueSection queue={this.state.queue} removeQueue={this.removeFromQueue}/>
      </div>
    );
  }
}

