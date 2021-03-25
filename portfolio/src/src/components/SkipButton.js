import React from 'react';

export default function PlayButton(props) {
        return(
            <div className="skipbuttonwrapper">
                <button className="skipbutton" onClick={props.onSkip}><i className="ri-skip-forward-fill"/></button>
            </div>
        );

}