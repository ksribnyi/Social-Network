import React from "react";
import {useFormik} from 'formik';
import {Button, Checkbox, TextField} from "@mui/material";
import s from './Profileinfo.module.css';
import * as yup from 'yup';


const ProfileDataFormFormik = ({profile, saveProfile, setEditMode, ...props}) => {
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            lookingForAJob: profile.lookingForAJob,
            contacts: {...profile.contacts}

        },
        validationSchema: yup.object({
            fullName: yup.string().required('Full name is required'),
            aboutMe: yup.string().required('About me is required'),
            lookingForAJobDescription: yup.string().required('Professional skills is required'),

        }),
        onSubmit: (values) => {
            saveProfile(values).then(
                () => {
                    setEditMode(false);
                }
            );
        }
    })
    console.log()
    return (
        <form className={s.chengeForm} onSubmit={formik.handleSubmit}>
            <div className={s.redName}>
                <TextField
                    size={'small'}
                    id="fullName"
                    name="fullName"
                    value={formik.values.fullName}
                    placeholder="Full name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}

                />
            </div>
            <div className={s.redAboutMe}>
                <TextField
                    size={'small'}
                    id="aboutMe"
                    name="aboutMe"
                    onChange={formik.handleChange}
                    value={formik.values.aboutMe}
                    placeholder="About me"
                    onBlur={formik.handleBlur}
                    error={formik.touched.aboutMe && Boolean(formik.errors.aboutMe)}
                    helperText={formik.touched.aboutMe && formik.errors.aboutMe}
                />
            </div>
            <div className={s.redSkils}>
                <TextField
                    size={'small'}
                    style={{width: '223px', resize: "none", fontSize: '15px', color: 'white'}}
                    multiline
                    rows={2}
                    id="lookingForAJobDescription"
                    name="lookingForAJobDescription"
                    onChange={formik.handleChange}
                    placeholder="Skills example: HTML, CSS, JS"
                    onBlur={formik.handleBlur}
                    value={formik.values.lookingForAJobDescription}
                    error={formik.touched.lookingForAJobDescription && Boolean(formik.errors.lookingForAJobDescription)}
                    helperText={formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription}
                />
            </div>
            <div className={s.redLookForJob}><Checkbox
                id="lookingForAJob"
                name="lookingForAJob"
                onChange={formik.handleChange}
                value={formik.values.lookingForAJob}
            />
                Looking for a job
            </div>
            <div className={s.redContact}>
                {Object.keys(formik.values.contacts).map(key => <div><TextField
                        style={{marginBottom: 5}}
                        size={'small'}
                        id={key}
                        name={`contacts.${key}`}
                        placeholder={key}
                        onChange={formik.handleChange}
                        value={formik.values?.contacts[key]}
                    /></div>
                )
                }
            </div>
            <div className={s.btnSubmit}>
                <Button type="submit" variant={"contained"} style={{width: "225px", marginTop: 10}} color={"primary"}
                        size={'small'}>Submit</Button>
            </div>
        </form>
    )
}


export default ProfileDataFormFormik