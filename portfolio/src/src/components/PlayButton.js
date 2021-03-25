import React from 'react';

export default function PlayButton(props) {
    if (props.pause) {
        return(
            <div className="playbuttonwrapper">
                <button className="playbutton" onClick={props.onPlayPause}><i className="ri-play-fill"/></button>
            </div>
        );
    } else {
        return(
            <div className="playbuttonwrapper">
                <button className="pausebutton" onClick={props.onPlayPause}><i className="ri-pause-fill"/></button>
            </div>
        );
    }

}