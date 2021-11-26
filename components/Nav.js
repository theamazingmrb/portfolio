import Link from 'next/link'

const Nav = () => {
    return (
        <div className="hidden md:p-6 md:mb-2 sm:shadow-md md:shadow-md lg:shadow-md sm:block md:block lg:block">
            <ul className='flex flex-row justify-around font-bold'>
                <li className='hover:text-red-400 hover:animate-bounce'>
                    <Link  href='/'>Blog</Link>
                </li>
                <li className='hover:text-red-400 hover:animate-bounce'>
                    <Link href='/'>Tutorials</Link>
                </li>
                <li className='hover:text-red-400'>
                    <Link href='/'><img className='w-10' src="https://cdn.pixabay.com/photo/2017/02/09/11/35/alphabet-2051707_960_720.png" alt="" /></Link>
                </li>
                <li className='hover:text-red-400 hover:animate-bounce'>
                    <Link href='/about'>Affiliates</Link>
                </li>
                <li className='hover:text-red-400 hover:animate-bounce'>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
