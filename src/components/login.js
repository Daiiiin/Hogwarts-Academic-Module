import React from 'react';
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import '../stylesheet/styles.css';
import hat from "../img/hat.png";
import mainLogo from "../img/school-logo.png";
// import $ from "jquery";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
};

const Login = () => {
    return (
        <div class="container-fluid p-5">
        <div class="row pb-5">
            <div class="col">
                <div class="row"> 
                    <div class="col d-flex justify-content-center pt-5">
                        <img src={mainLogo} alt="Hogwarts Logo" height="200" />
                        <h1 class="login-header pt-5 ps-4">Hogwarts School of Witchcraft and Wizardry</h1>
                    </div>                
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-sm-7 text-center">
                <h2 class="login-quote">"We are only as strong as we are united, weak as we are divided." -Albus Dumbledore</h2>
                <img src={hat} alt="Sorting Hat" height="250" />
            </div>
            <div class="col bg-success">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .max(30, 'Must be 30 characters or less')
                            .required('Required'),
                        password: Yup.string()
                            .required('Required')
                            .min(6, 'Password is too short')
                    })}
                    onSubmit={(values) => {
                        var data = 'email=' + values.email + '&password=' + values.password
                        alert(data)
                        // $.ajax({
                        //     type : 'POST',
                        //     url : 'http://localhost/hogwarts-academic-module/src/php/login-action.php',
                        //     data : data,
                        //     success : function(response) {
                        //         if(response["status"] === 200){
                        //             $('#signupForm')[0].reset();
                        //         }
                        //     }
                        // });
                        
                    }}
                >
                    <Form>
                        <MyTextInput
                            label="Email"
                            name="email"
                            type="email"
                        />
                        <MyTextInput
                            label="Password"
                            name="password"
                            type="password"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    </div>
    );
};

export default Login;