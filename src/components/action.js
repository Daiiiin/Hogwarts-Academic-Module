import React, { Component } from 'react';
import { useField } from "formik";
import * as yup from "yup";
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import styled from "@emotion/styled";
import "../stylesheet/styles.css"

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required')
});

export const addStudentSchema = yup.object().shape({
  fname: yup.string().required('Required'),
  mname: yup.string().required('Required'),
  lname: yup.string().required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
  year: yup.number().required('Required'),
  house: yup.number().required('Required')
});

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 210px;

  &:before {
    content: "❌ ";
    font-size: 10px;
  }
`;

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </div>
  );
};
export class LogOut extends Component {
    constructor(props) {
      super(props);
      this.logoutClick = this.logoutClick.bind(this);
    }

    logoutClick() {
      axios.get('http://localhost/Hogwarts-Academic-Module/src/php/logout-action.php', {
        withCredentials: true
      })
      .then(function() {
        window.location.replace('/');
      });
    }

    render() {
      return(
        <Nav.Link onClick={this.logoutClick}>Logout</Nav.Link>
      );
    }
}

class SandBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        var self = this;
        axios({
          method: 'GET',
          url: 'http://localhost/Hogwarts-Academic-Module/src/php/fetch-user-action.php',
          withCredentials: true
        })
        .then(function(res) {
          self.setState({data: res.data});   
        })
        .catch(function (error) {
          console.log(error);
       });
       
    }
    
    render() {
      var fetch = this.state.data;
        return (
              // this.state.data.map((result) => {
              //   return (
              //        <ul key={result.userID}>
              //         <li>{result.userID}</li>  
              //         <li>{result.fname}</li>    
              //         <li>{result.lname}</li>  
              //       </ul>
              //    );
              // })
              <h1>{ fetch.fname }</h1>
        );
    }
}
