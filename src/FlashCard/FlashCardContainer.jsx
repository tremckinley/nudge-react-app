import { useState } from "react";

export default function FlashCardContainer(props) {
    const {children} = props;
    const handleLeftClick = props.handleLeftClick;
    const handleRightClick = props.handleRightClick;
    const handlePause = props.handlePause;
    const paused = props.paused;

    return (
        <div className="flex flex-col items-center justify-center my-2">
            <div className="text-2xl mb-2">
                <button className="p-1 rounded-lg"><i className="fa-solid fa-backward-fast" title="Go Back 3" onClick={() => handleLeftClick(true)}></i></button>
                <button><i className="fa-solid fa-backward-step ml-2 mr-4" title="Go Back 1" onClick={() => handleLeftClick()}></i></button>
                <button><i className={"fa-solid mt-2 text-2xl " + (paused ? "fa-play" : "fa-pause")} onClick={() => handlePause()}></i></button>
                <button><i className="fa-solid fa-forward-step mr-2 ml-4" onClick={() => handleRightClick()}></i></button>
                <button><i className="fa-solid fa-forward-fast" onClick={() => handleRightClick(true)}></i></button>
            </div>
            <hr></hr>
            <section className="flex flex-col mx-4 mt-2">
                {props.children}
            </section>
        </div>  
    );
}