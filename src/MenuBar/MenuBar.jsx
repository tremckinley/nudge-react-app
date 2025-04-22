export default function MenuBar({props}) {
    return (
        <div className='flex w-full items-center h-full'>
        <h1 className='text-2xl font-bold text-center w-full flex-1'>Nudge's Study Guide</h1>
        <button onClick={() => {alert('hellow')}} className="hover:cursor-pointer text-indigo-900 text-xl"><i className="fa fa-bars px-2"></i></button>

        
        </div>
    ) 
}