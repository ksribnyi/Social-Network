import {Field, reduxForm} from "redux-form";
import s from './../Dialogs.module.css'
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validator/validator";
import {Button} from "@mui/material";

const maxLength70 = maxLengthCreator(70)

const AddMessageForm = (props) => {
    return (
        <form className={s.formAddMasage} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength70]}
                       name={'newMessageBody'} placeholder='Enter your message'
                />
            </div>
            <div>
                <Button type={'submit'} variant={"contained"} style={{background: '#e8802d',
                    height: '41px'}} color={"primary"} size={'small'}>ADD MESSAGE</Button>
            </div>
        </form>
    )

}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)