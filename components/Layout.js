import BurgerNav from "./BugerNav"
import Burger from "./Burger"
import Footer from "./Footer"
import Nav from "./Nav"
import { useState } from 'react';

const Layout = ({children}) => {
    const [open, setOpen] = useState(false);

    return (<div className="bg-gray-500 flex flex-col justify-between min-h-screen">
        <Nav />
        <Burger open={open} setOpen={setOpen} />
        <BurgerNav open={open} setOpen={setOpen} />
        {children}
        <Footer />
        </div>
    )
}

export default Layout