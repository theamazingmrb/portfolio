import Link from 'next/link'

const BurgerNav = ({open}) => {
    return (
        <div className={`${ open ? '-translate-x-0' : '-translate-x-full' } uppercase  flex flex-col justify-center bg-gray-300 h-screen text-left p-4 absolute top-0 left-0 transition ease-in-out duration-700  sm:hidden md:hidden lg:hidden`}>
                    <Link  href='/'>Blog</Link>
                    <Link href='/'>Tutorials</Link>
                    {/* <Link href='/'><img className='w-10' src="https://cdn.pixabay.com/photo/2017/02/09/11/35/alphabet-2051707_960_720.png" alt="" /></Link> */}
                    <Link href='/about'>Affiliates</Link>
                    <Link href='/about'>About</Link>
        </div>
    )
}

export default BurgerNav
   