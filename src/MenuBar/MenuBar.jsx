import { useContext, useState } from "react"
import SettingsMenu from "./SettingsMenu"

export default function MenuBar(props) {
    const [open, setOpen] = useState(false);
    const {speed, handleSpeed, onAddFact} = props;
    
    function handleClick() {
        setOpen(true)
    }

    return (
        <div className='flex w-full items-center h-full relative'>
            <h1 className='text-2xl font-bold text-center w-full flex-1'>Nudge's Study Guide</h1>
            <div className="flex items-center gap-2">
                <button 
                    onClick={onAddFact} 
                    className="hover:cursor-pointer text-indigo-900 text-xl px-2 py-1 rounded hover:bg-indigo-100 transition-colors"
                    title="Add New Fact"
                >
                    <i className="fa fa-plus"></i>
                </button>
                <button onClick={handleClick} className="hover:cursor-pointer text-indigo-900 text-xl"><i className="fa fa-bars px-2"></i></button>
            </div>
            <SettingsMenu open={open} setOpen={setOpen} handleSpeed ={handleSpeed} speed={speed}/>
        </div>
    )
}