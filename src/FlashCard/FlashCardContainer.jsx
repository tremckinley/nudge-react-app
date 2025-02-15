import { useState } from "react";

export default function FlashCardContainer(props) {
    const {children} = props;
    const handleLeftClick = props.handleLeftClick;
    const handleRightClick = props.handleRightClick;

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <section className="flex flex-col mx-4">
                {props.children}
            </section>
            <div className="text-2xl text-[indigo]">
                <i className="fa-solid fa-backward-fast" onClick={() => handleLeftClick(true)}></i>
                <i className="fa-solid fa-backward-step ml-2 mr-4" onClick={() => handleLeftClick()}></i>
                <i className="fa-solid fa-forward-step mr-2 ml-4" onClick={() => handleRightClick()}></i>
                <i className="fa-solid fa-forward-fast" onClick={() => handleRightClick(true)}></i>
            </div>
        </div>  
    );
}