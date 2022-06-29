import Header from "./Header"
import Footer from "./Footer"

const Layout = ({menuItems, children}) => {
    return <>
    <Header menuItems={menuItems} />
    {children}
    <Footer />
    </>
}
export default Layout