import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../asets/image/user_icon.jpg'
import {NavLink} from "react-router-dom";



const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <NavLink to={'/profile/' + u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                </NavLink>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)}
    </div>
}


export default Users;