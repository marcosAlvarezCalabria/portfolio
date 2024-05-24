import ModeContext from "../../../contexts/mode.context";
import "./navbar.css"
import { useContext } from "react";


function Navbar() {
    const {mode, toggleMode} = useContext(ModeContext)

    const handleMode = ()=>{
        toggleMode()
    }
    return (
        <nav className=" navbar  navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid justify-content-end">
                <div className="d-flex">
                    <button className="">language</button>
                    <button onClick={handleMode}>Dark</button>
                </div>
                
            </div>

        </nav>

    )
}
export default Navbar