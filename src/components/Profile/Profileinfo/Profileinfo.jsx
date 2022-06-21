import React from "react";
import s from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import UserIcon from "../../../asets/image/user_icon.jpg"
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const Profileinfo = ({profile, status, updateStatus}) => {
    if (!profile ) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.discription_block}>
                <div className={s.user}>
                {!profile.photos.large && <img className={s.defPhoto} src={UserIcon}/>}
                    <img src={profile.photos.large}/>
                </div>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                </div>

            </div>
        </div>
    )
}

export default Profileinfo;