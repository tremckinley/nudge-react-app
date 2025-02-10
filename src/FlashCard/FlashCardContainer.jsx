import { useState } from "react";


export default function FlashCardContainer(props) {
    const {children} = props
    const [index, setIndex] = useState(0)

    return (
        <div className="flex border items-center">
            <i className="fa-solid fa-arrow-left"></i>
            {children}
        </div>
    )

}