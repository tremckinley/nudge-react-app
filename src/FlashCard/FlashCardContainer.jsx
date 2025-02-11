import { useState } from "react";


export default function FlashCardContainer(props) {
    const {children} = props
    const [index, setIndex] = useState(0)

    return (
        <div className="flex items-center justify-center mt-10">
            <i className="fa-solid fa-arrow-left"></i>
            <section className="flex flex-col mx-4">
                {children}
            </section>
            <i className="fa-solid fa-arrow-right"></i>

        </div>
    )

}