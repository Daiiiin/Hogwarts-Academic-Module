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
        <div className="container-fluid p-5">
        <div className="row pb-3">
            <div className="col">
                <div className="row"> 
                    <div className="col d-flex justify-content-center">
                        <img src={mainLogo} className="head-logo" alt="Hogwarts Logo" height="200" />
                        <h1 className="login-header pt-5 ps-4">Hogwarts School of Witchcraft and Wizardry</h1>
                    </div>                
                </div>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-sm-6 ms-5 text-center">
                <h2 className="login-quote">"We are only as strong as we are united, weak as <br/> we are divided." -Albus Dumbledore</h2>
                <img src={hat} alt="Sorting Hat" height="250" />
            </div>
            <div className="col-sm-4 ms-5 bg-success form-container">
                <center>
                <h1 className="form-header pb-3">Login</h1>
                    <Formik
                        // initialValues={{ email: '', password: '' }}
                        // validationSchema={Yup.object({
                        //     email: Yup.string()
                        //         .email('Invalid email address')
                        //         .max(30, 'Must be 30 characters or less')
                        //         .required('Required'),
                        //     password: Yup.string()
                        //         .required('Required')
                        //         .min(6, 'Password is too short')
                        // })}
                        // onSubmit={(values) => {
                        //     var data = 'email=' + values.email + '&password=' + values.password
                        //     alert(data)
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
                            
                        // }}
                    >
                        <Form>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </span>
                                <MyTextInput
                                    // label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text">
                                    <i className="fas fa-key"></i>
                                </span>
                                <MyTextInput
                                    // label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mb-4">Login</button>
                        </Form>
                    </Formik>
                    <p>Forgot Password? <a href="#">Click here!</a></p>
                </center>
            </div>
        </div>
    </div>
    );
};

export default Login;
