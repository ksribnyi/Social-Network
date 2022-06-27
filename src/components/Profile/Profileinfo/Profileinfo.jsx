import React, {useState} from "react";
import s from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import UserIcon from "../../../asets/image/user_icon.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import {createField, TextFieldform} from "../../common/FormsControls/FormsControls";
import {Button, TextField} from "@mui/material";
import upPhoto from "../../../asets/image/upload-photo.png"


const Profileinfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }
    return (
        <div className={s.profileBlock}>
            <div className={s.discription_block}>
                <div className={s.user}>
                    {!profile.photos.large && <img alt={'defUserPhoto'} className={s.defPhoto} src={UserIcon}/>}
                    <img alt={'myUserPhoto'} src={profile.photos.large}/>

                    <div className={s.position_btn_upload_photo}>
                        {isOwner && <div className={s.div_uploadFile}>
                            <p><img className={s.iconPhoto} alt={'upPhoto'} src={upPhoto}/></p>
                            <TextField className={s.uploadFile} type={'file'}
                                       style={{height: 80, width: 70, margin: 0, padding: 0}}
                                       onChange={onMainPhotoSelected}/></div>}
                    </div>

                </div>
                <div className={s.myInfo}>

                    <div className={s.aboutMe}>
                        {editMode
                            ? <ProfileDataFormReduxForm profile={profile} onSubmit={onSubmit}/>
                            : <ProfileData goToEditMode={() => {
                                setEditMode(true)
                            }} profile={profile} isOwner={isOwner} updateStatus={updateStatus} status={status}/>}
                    </div>
                </div>

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode, updateStatus, status}) => {
    return <div className={s.myInfoBlock}>

        <div className={s.myName}>
            {isOwner && <div>
                <Button onClick={goToEditMode} variant={"contained"} style={{background: '#e8802d'}} color={"primary"}
                        size={'small'}>edit</Button>
            </div>}
            <div>
                {profile.fullName}
            </div>
            <div className={s.status}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>

        <div className={s.aboutMe}>
            <b>About me</b>: {profile.aboutMe}
        </div>

        <div className={s.lookForJob}>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "✅" : "❌"}
        </div>

        <div className={s.skills}>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>

        <div className={s.contacts}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)}
        </div>

    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return  contactValue !== null ? <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div> : ''
}

export default Profileinfo;

