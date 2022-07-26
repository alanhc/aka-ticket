import SwitchRole from "./SwitchRole"
//import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div className=" flex flex-col items-center justify-between"> 
            <SwitchRole/>
            { children }
            
        </div>
    )
}
export default Layout;