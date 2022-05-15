import React, { useState } from 'react';
import s from './Dialogs.module.css'
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {
    let dialogsData = [
        {id: '1', name: 'Dimos'},
        {id: '2', name: 'Andrey'},
    ]
    let messageData = [
        {id: '1', message: 'HI'},
        {id: '2', message: 'How are you?'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>

            </div>
        </div>
    )
}

export default Dialogs