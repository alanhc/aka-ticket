import SwitchRole from "./SwitchRole"
//import Footer from "./Footer"

const Layout = (props) => {
    return (
        <div className="container mx-auto"> 
            <SwitchRole/>
            { props.children }
            
        </div>
    )
}
export default Layout;