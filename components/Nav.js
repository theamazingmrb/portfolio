import Link from 'next/link'

const Nav = () => {
    return (
        <div className="p-6 mb-2 shadow-md">
            <ul className='flex flex-row justify-around'>
                <li>
                    <Link href='/'>Blog</Link>
                </li>
                <li>
                    <Link href='/'>Tutorials</Link>
                </li>
                <li>
                    <Link href='/about'><img class='w-10' src="https://cdn.pixabay.com/photo/2017/02/09/11/35/alphabet-2051707_960_720.png" alt="" /></Link>
                </li>
                <li>
                    <Link href='/about'>Affiliates</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
