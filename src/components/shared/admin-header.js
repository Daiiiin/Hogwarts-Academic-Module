import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import mainLogo from "../../img/school-logo.png"; 
import '../../stylesheet/homepage.css';
import $ from 'jquery';

class AdminHeader extends Component {
    constructor(props) {
        super(props);
        this.logoutClick = this.logoutClick.bind(this);
      }
    
      logoutClick() {
        $.ajax({
          type: 'GET',
          url: 'http://localhost/Hogwarts-Academic-Module/src/php/logout-action.php',
          success: function(response) {
            if(response["status"] === 200){
              window.location.replace('/'); 
            }
          }
        });
      }
      
      render() {
        return(
          <>
            <Navbar bg="light" variant="light">
            <Container>
            <img
                src={mainLogo}
                width="4.5%"
                height="auto"
                alt="Hogwarts Logo"
              />
            <Nav className="me-auto">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">Student</Nav.Link>
              <Nav.Link href="">Instructor</Nav.Link>
              <Nav.Link href="">Course</Nav.Link>
              <Nav.Link onClick={this.logoutClick}>Logout</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
          </>
          );
      }
}

export default AdminHeader;