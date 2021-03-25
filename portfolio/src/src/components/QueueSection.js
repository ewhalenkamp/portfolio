import React from 'react';
import VideoResult from './VideoResult.js';

export default function QueueSection(props) {
    const removeQueue = (video) => {
        props.removeQueue(video);
    }
    const compileQueue = () => {
        const queueresults = [];
        for (var i=props.queue.length-1;i>0;i--) {
            queueresults.push(<VideoResult key={i} video={props.queue[i]} removeQueue={removeQueue} isQueue={true}/>)
        }
        return queueresults;
    }
    return(
        <div className="queuesectionwrapper">
            <div className="queueheader">
                <h1>Queue</h1>
            </div>
            <div className="queuevideos">
                {compileQueue()}
            </div>
        </div>
        );
}