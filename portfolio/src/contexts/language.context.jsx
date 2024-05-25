import { useContext, createContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageContextProvider({children}){
    const [language, setLanguage] = useState("spanish")

    function toggleLanguage(){
        setLanguage((prevLanguage) => (prevLanguage === "spanish" ? "english" : "spanish"))
       

    };
    const value = {
        language,
        toggleLanguage
    }

    return(
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    )
};
export const lan = ()=> useContext(LanguageContext);
export default LanguageContext