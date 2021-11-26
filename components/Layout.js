import Footer from "./Footer"
import Nav from "./Nav"
const Layout = ({children}) => {
    return (<div className="bg-red-100">
        <Nav />
        {children}
        <Footer />
        </div>
    )
}

export default Layout