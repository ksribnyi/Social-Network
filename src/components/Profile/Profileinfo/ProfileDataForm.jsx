import React from "react";
import {
    Checkboxs,
    createField,
    Input,
    Textarea,
    TextFieldform,
    TextFields
} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './Profileinfo.module.css'
import {Button} from "@mui/material";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form className={s.chengeForm} onSubmit={handleSubmit}>

        <div className={s.redName}>
            {createField('Name', "fullName", [], TextFieldform, '', '', 'outlined', "primary")}
        </div>

        <div className={s.redAboutMe}>
            {createField("About me", "aboutMe", [], TextFieldform, '', '', 'outlined', "primary")}
        </div>

        <div className={s.redLookForJob}>
            <b>Looking for a job</b>:
            {createField("", "lookingForAJob", [], Checkboxs, {type: "checkbox"}, '', 'outlined', "primary")}
        </div>

        <div className={s.redContact}>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    {createField(key, "contacts." + key, [], TextFieldform, '', '', 'outlined', "primary")}
                </div>
            })}
        </div>

        <div className={s.redSkils}>

            {createField("My professional skills", "lookingForAJobDescription", [], TextFieldform, '', '', 'outlined', "primary")}
        </div>


        <div className={s.btnSubmit}>
            <button>save</button>
            {error && <div>
                {error}
            </div>}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile', enableReinitialize: true})(ProfileDataForm)

export default ProfileDataFormReduxForm;