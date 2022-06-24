import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../../src/asets/image/user_icon.jpg";
import {NavLink} from "react-router-dom";

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
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</button>}
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
