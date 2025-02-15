import { useState } from "react";


export default function FlashCardContainer(props) {
    const {children} = props
    const handleLeftClick = props.handleLeftClick
    const handleRightClick = props.handleRightClick

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <section className="flex flex-col mx-4">
                {props.children}
            </section>
            <div>
            <i className="fa-solid fa-arrow-left mx-1" onClick={handleLeftClick}></i>
            <i className="fa-solid fa-arrow-right mx-1" onClick={handleRightClick}></i>
            </div>

        </div>
    )

}