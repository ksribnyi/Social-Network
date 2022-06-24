import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {viewProfile} from "../../redux/profileReducer";
import React from "react";


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile/' + props.authorizedUserId}
                         style={({isActive}) => ({
                             color: isActive ? '#186d74' : null,
                             fontWeight: isActive ? 'bold' : null
                         })}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' style={({isActive}) => ({
                    color: isActive ? '#186d74' : null,
                    fontWeight: isActive ? 'bold' : null
                })}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' style={({isActive}) => ({
                    color: isActive ? '#186d74' : null,
                    fontWeight: isActive ? 'bold' : null
                })}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' style={({isActive}) => ({
                    color: isActive ? '#186d74' : null,
                    fontWeight: isActive ? 'bold' : null
                })}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' style={({isActive}) => ({
                    color: isActive ? '#186d74' : null,
                    fontWeight: isActive ? 'bold' : null
                })}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' style={({isActive}) => ({
                    color: isActive ? '#186d74' : null,
                    fontWeight: isActive ? 'bold' : null
                })}>Settings</NavLink>
            </div>
        </nav>
    )
}


const mapStateToProps = (state) => ({
    authorizedUserId: state.auth.userId
})


export default connect(mapStateToProps, {viewProfile})(Navbar);