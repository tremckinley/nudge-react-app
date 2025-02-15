import "./layout.css"


export default function FlashCard(props) {
    const { AName, ADesc } = props
    
    return (
        <div className="ticker border my-2 max-w-md">
            <h2 id="agencyName" className="">{props.AName}</h2>
            <hr className="my-2"></hr>
            <p id="agencyDescription">{props.ADesc}</p>
        </div>
    )

}