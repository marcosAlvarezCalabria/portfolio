import LanguageContext from "../../../contexts/language.context";
import ModeContext from "../../../contexts/mode.context";
import "./navbar.css"
import { useContext } from "react";


function Navbar() {
    const {mode, toggleMode} = useContext(ModeContext)
    const { language, toggleLanguage} = useContext(LanguageContext)

    const handleMode = ()=>{
        toggleMode()
    }
    const handleLanguage= () =>{
        toggleLanguage()
    }
    return (
        <nav className=" navbar  navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid justify-content-end">
                <div className="d-flex">
                    <button onClick={handleLanguage} className="">language</button>
                    <button onClick={handleMode}>Dark</button>
                </div>
                
            </div>

        </nav>

    )
}
export default Navbar