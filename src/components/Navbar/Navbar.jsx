import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {profileAPI} from "../../api/api";


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile/' + '24434'} style={({isActive}) => ({color: isActive ? 'red' : null})}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' style={({isActive}) => ({color: isActive ? 'red' : null})}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' style={({isActive}) => ({color: isActive ? 'red' : null})}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' style={({isActive}) => ({color: isActive ? 'red' : null})}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' style={({isActive}) => ({color: isActive ? 'red' : null})}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' style={({isActive}) => ({color: isActive ? 'red' : null})}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;