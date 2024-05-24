import React, { useEffect, useState } from 'react';
import Navbar from '../../components/ui/navbar/navbar'; // Asumiendo que tienes un componente Navbar
import FixedText from '../../components/fixed-text/fixed-text';
import MainContent from '../../components/main-content/main-content';
import "./main-page.css"; 
import { useContext } from 'react';
import ModeContext from '../../contexts/mode.context';

function MainPage() {
    const mode = useContext(ModeContext)
    const [theme, setTheme] = useState(mode)
    useEffect(()=> {
        setTheme(mode)

    },[mode])
    
  console.log(theme)
    return (
        <>
            <Navbar />
            <div className="main-page row no-gutters ">
                <FixedText className={theme.mode} />
                <MainContent className={theme.mode} />
            </div>
        </>
    );
}

export default MainPage;