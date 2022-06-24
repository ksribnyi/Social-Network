import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../../src/asets/image/user_icon.jpg";
import {NavLink} from "react-router-dom";
import Button from '@mui/material/Button'

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.usersGrid}>
            <span className={styles.photoFolowing}>
                <div>
                   <NavLink to={'/profile/' + user.id}>
                    <img alt={'usersPhoto'} src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                   </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <Button className={styles.btnFollow} variant={"contained"} color={"primary"}
                                  disabled={followingInProgress
                                      .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</Button>
                        : <Button className={styles.btnUnfollow} variant={"contained"} color={"primary"}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</Button>}
                </div>
            </span>
            <span className={styles.aboutUsers}>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
        </div>)
}

export default User;
