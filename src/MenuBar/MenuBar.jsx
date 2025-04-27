import { useContext, useState } from "react"
import SettingsMenu from "./SettingsMenu"

export default function MenuBar(props) {
    const [open, setOpen] = useState(false);
    const {speed, handleSpeed} = props;
    
    function handleClick() {
        setOpen(true)
    }

    return (
        <div className='flex w-full items-center h-full relative'>
            <h1 className='text-2xl font-bold text-center w-full flex-1'>Nudge's Study Guide</h1>
            <button onClick={handleClick} className="hover:cursor-pointer text-indigo-900 text-xl"><i className="fa fa-bars px-2"></i></button>
            <SettingsMenu open={open} setOpen={setOpen} handleSpeed ={handleSpeed} speed={speed}/>
        </div>
    )
}