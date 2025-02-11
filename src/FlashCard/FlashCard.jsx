import "./layout.css"
import { useEffect, useState } from "react"


export default function FlashCard(props) {
    const { AName, ADesc } = props
    


    return (
        <div className="ticker border my-2 w-48">
            <h2 id="agencyName" className="">Agency</h2>
            <hr></hr>
            <p id="agencyDescription">The description of each agency will go here.</p>
        </div>
    )

}