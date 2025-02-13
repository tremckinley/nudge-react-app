import { useState } from "react";


export default function FlashCardContainer(props) {
    const {children} = props
    const [index, setIndex] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <section className="flex flex-col mx-4">
                {children}
            </section>
            <div>
            <i className="fa-solid fa-arrow-left mx-1"></i>
            <i className="fa-solid fa-arrow-right mx-1"></i>
            </div>

        </div>
    )

}