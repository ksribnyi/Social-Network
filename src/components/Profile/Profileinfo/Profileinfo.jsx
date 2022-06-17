import React from "react";
import s from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import UserIcon from "../../../asets/image/user_icon.jpg"
import ProfileStatus from "./ProfileStatus";


const Profileinfo = (props) => {
    if (!props.profile ) {
        return <Preloader/>
    }
    if( !props.profile.photos.large){
        return <img src={UserIcon}/>
    }
    debugger
    return (
        <div>
            {/*<div className={s.backimg}>*/}
            {/*    <img*/}
            {/*        src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'></img>*/}
            {/*</div>*/}
            <div className={s.discription_block}>
                <div className={s.user}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default Profileinfo;