import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Logo from "../../asets/image/Logo_network.png"

const Header = (props) => {
    return <header className={s.header}>
        <img alt={'logo'} src={Logo}/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>{props.login} - <button onClick={props.logout}>Logout</button></div> : <NavLink className={s.btn}  to={'/login'}>Login</NavLink>}

        </div>
    </header>
}

export default Header;