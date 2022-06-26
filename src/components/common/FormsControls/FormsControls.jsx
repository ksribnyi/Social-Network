import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "redux-form";
import {Checkbox, TextareaAutosize, TextField} from "@mui/material";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div className={styles.checkboxs}>
                {props.children}
                {props.label}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const TextFields = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><TextField className={styles.textfield} {...input} {...restProps}/></FormControl>
}
export const TextFieldform = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl  {...props}><TextField size={'small'} margin={'none'} style={{padding: 7}}  {...input} {...restProps}/></FormControl>
}

export const Checkboxs = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><Checkbox  {...input} {...restProps}/>  </FormControl>
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><TextareaAutosize {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl  {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, label, variant = null, color= null, ) => (
    <div>
        <span>
            <Field placeholder={placeholder} name={name}
                   color={color}
                   validate={validators}
                   component={component}
                   variant={variant}
                   label={label}
                   {...props}
            />
        </span>
    </div>
)