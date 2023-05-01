import React from 'react'
import "../Components/header.css"
// import { LoginContext } from './ContextProvider/Context';
import Avatar from '@mui/material/Avatar';


const Header = () => {
  // const { logindata, setLoginData } = useContext(LoginContext);
  return (
    <>
    <header>
        <nav><h1> hello cloud</h1>

        <div className="avtar">
            <Avatar style={{background:"blue"}}>N</Avatar>
        </div>
        </nav>
    </header>
    </>
  )
}

export default Header
