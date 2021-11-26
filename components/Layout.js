import BurgerNav from "./BugerNav"
import Burger from "./Burger"
import Footer from "./Footer"
import Nav from "./Nav"
import { useState } from 'react';

const Layout = ({children}) => {
    const [open, setOpen] = useState(false);

    return (<div className="bg-red-100 ccontainer">
        <Nav />
        <Burger open={open} setOpen={setOpen} />
        <BurgerNav open={open} setOpen={setOpen} />
        {children}
        <Footer />
        </div>
    )
}

export default Layout