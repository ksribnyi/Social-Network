import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Logo from "../../asets/image/Logo_network.png"
import {Button} from "@mui/material";

const Header = (props) => {
    return <header className={s.header}>
        <img alt={'logo'} src={Logo}/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>{props.login} - <Button onClick={props.logout} variant={"contained"} style={{
                    width: "125x",
                    background: 'linear-gradient(135deg, #186d74, #b84317'
                }} color={"primary"} size={'small'}>Logout</Button></div> :
                <NavLink className={s.btn} to={'/login'}>Login</NavLink>}

        </div>
    </header>
}

export default Header;