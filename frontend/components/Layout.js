import SwitchRole from "./SwitchRole"
//import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div className="container mx-auto"> 
            <SwitchRole/>
            { children }
            
        </div>
    )
}
export default Layout;