import React from 'react';
import './component.css';

export default function VideoResult(props) {
    
    const decode = (str) => {
        if (str.includes("&#39;")) {
            str.replace("&#39;","'");
        }
        return str;
    }
    
    const video = props.video;
    const title = decode(String(video.snippet.title));
    const channelTitle = decode(String(video.snippet.channelTitle));
    
    const thumbnail = video.snippet.thumbnails.high;

    const addQueue = (event) => {
        event.preventDefault();
        props.addQueue(video);
    }

    const removeQueue = (event) => {
        event.preventDefault();
        props.removeQueue(video);
    }

    
    
    const returnButton = () => {
        console.log(props.removeQueue);
        console.log(props.addQueue);
        if (props.isMedia)
            return;
        if (props.isQueue)
            return <button onClick={removeQueue}>Remove from Queue</button>;
        else
            return <button onClick={addQueue}>Add to Queue</button>;
    }

    return(
        <div className="videotile">
            <img src={thumbnail.url} alt={title}></img>
            {returnButton()}
            <div className="videoinfo">
                
                <p ><b>{title}</b></p>
                <p>{channelTitle} </p>
                
                
            </div>
        </div>
    );
}