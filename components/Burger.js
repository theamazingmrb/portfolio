const Burger = ({ open, setOpen }) => {
    return (
        <div className='w-full flex sm:hidden md:hidden lg:hidden'>
            <div open={open} className='cursor-pointer relative border-none p-0 z-10 top-6 left-3.5 flex flex-col justify-around w-3 h-3 bg-transparent   sm:hidden md:hidden lg:hidden z-50' open={open} onClick={() => setOpen(!open)}>
                <div className='w-4 h-0.5 bg-gray-500 relative transition-all'/>
                <div className='w-4 h-0.5 bg-gray-500 relative transition-all'/>
                <div className='w-4 h-0.5 bg-gray-500 relative transition-all'/>
            </div>
            <img className='w-10 m-auto mt-1 ' src="https://cdn.pixabay.com/photo/2017/02/09/11/35/alphabet-2051707_960_720.png" alt="" />
        </div>
    )
}

export default Burger
