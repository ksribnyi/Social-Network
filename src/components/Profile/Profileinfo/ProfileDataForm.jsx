import React from "react";
import {
    Checkboxs,
    createField,
    TextFieldform,
} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './Profileinfo.module.css';
import {Button} from "@mui/material";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form className={s.chengeForm} onSubmit={handleSubmit}>

        <div className={s.redName}>
            {createField ('Name', "fullName", [], TextFieldform, '', '', 'outlined', "primary")}
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
            <Button type={'submit'} variant={"contained"} style={{width: "225px"}} color={"primary"} size={'small'}>save</Button>
            {error && <div>
                {error}
            </div>}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit_profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;