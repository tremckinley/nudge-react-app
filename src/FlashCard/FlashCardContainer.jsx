import { useState } from "react";

export default function FlashCardContainer(props) {
    const {children} = props;
    const handleLeftClick = props.handleLeftClick;
    const handleRightClick = props.handleRightClick;
    const handlePause = props.handlePause;
    const paused = props.paused;

    return (
        <div className="flex flex-col items-center justify-center my-2">
            <div className="text-2xl text-[indigo] mb-2">
                <i className="fa-solid fa-backward-fast" tooltip="Go Back 3" onClick={() => handleLeftClick(true)}></i>
                <i className="fa-solid fa-backward-step ml-2 mr-4" tooltip="Go Back 1" onClick={() => handleLeftClick()}></i>
                <i className={"fa-solid mt-2 text-2xl " + (paused ? "text-blue-400 fa-play" : "text-[indigo] fa-pause")} onClick={() => handlePause()}></i>
                <i className="fa-solid fa-forward-step mr-2 ml-4" onClick={() => handleRightClick()}></i>
                <i className="fa-solid fa-forward-fast" onClick={() => handleRightClick(true)}></i>
            </div>
            <hr></hr>
            <section className="flex flex-col mx-4 mt-2">
                {props.children}
            </section>
        </div>  
    );
}