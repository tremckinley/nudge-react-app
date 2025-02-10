import "./layout.css"

export default function FlashCard(props) {
    const { AName, ADesc } = props

    return (
        <div className="contain">
            <h2 id="agencyName">Agency</h2>
            <hr></hr>
            <p id="agencyDescription">The description of each agency will go here.</p>
        </div>
    )

}