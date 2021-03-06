import React from "react";
import {reduxForm} from "redux-form";
import {Checkboxs, createField, TextFields} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validator/validator";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {useNavigate} from "react-router";
import style from "./../common/FormsControls/FormsControls.module.css";
import Button from '@mui/material/Button';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Email", "email", [required], TextFields, '', '', 'outlined', "primary")}
            {createField("Password", "password", [required], TextFields, {type: "password"}, '', 'outlined', "primary")}
            {createField(null, "rememberMe", [], Checkboxs, {}, "remember me", "filled", "primary")}

            {props.captchaUrl && <img alt={'captcha'} src={props.captchaUrl}/>}
            {props.captchaUrl && createField('outlined', "primary", "Symbols from image", "captcha", [required], TextFields, {})}


            {props.error && <div>{props.error}</div>}
            <div>
                <Button className={style.btnLogin} type="submit" variant={"contained"} color={"primary"}>Login</Button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    let navigate = useNavigate();
    if (props.isAuth) {
        return navigate(`/profile/24434`)
    }
    return <div className={style.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);