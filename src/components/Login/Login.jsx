import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validator/validator";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {useNavigate} from "react-router";
import style from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       validate={[required]} type={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> remember me
            </div>
            { props.error && <div className={style.formSummeryError}>
                {props.error}
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    let navigate = useNavigate();
    if(props.isAuth) {
        return navigate(`/profile/24434`)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);