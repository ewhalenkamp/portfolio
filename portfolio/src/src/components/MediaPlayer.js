import React from 'react';
import YouTube from 'react-youtube';
import VideoResult from './VideoResult.js';

  export default function MediaPlayer(props) {

      //onReady changes App's player state, which stores the video player that can be manually controlled
    const onReady = event => {
        
        props.changeVideoPlayer(event.target);
        
    }

    const opts = {
      height: '0',
      width: '0',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    if (props.video != null) {
      return (
        <div className="mediaplayer">
          <VideoResult isMedia={true} video={props.video}/>
          <YouTube className="player" videoId={props.videoId} opts={opts} onEnd = {props.onVideoEnd} onReady={onReady}/>
        </div>);
    }
    else {
      return (
        <div className="mediaplayer"></div>
      );
    }
  
    
  }