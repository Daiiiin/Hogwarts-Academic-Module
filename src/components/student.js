import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheet/homepage.css';
import event_pic from "../img/event_img.jpg";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import mainLogo from "../img/school-logo.png"; 
import '../stylesheet/homepage.css';
import $ from 'jquery';

export default class StudentHeader extends Component {
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
            <Link to="/student" className="nav-link">Home</Link>
            <Link to="/student/add-course" className="nav-link">Add Course</Link>
            <Link to="/student/view-grades" className="nav-link">View Grades</Link>
            <Link to="/student/about" className="nav-link">About</Link>
            <Nav.Link onClick={this.logoutClick}>Logout</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
          <Outlet />
        </>
        );
    }
}

export function StudentHome() {
  return (
    <>
    <div className="events">
        <div className="div1">
          <center>
          <img
                src={event_pic}
                width="80%"
                height="auto"
                alt="Event Hogwarts"
              />
              </center>
        </div>
        <div className="div2">
        <h1>EVENTS:</h1>
                <ul>
                  <li><h3>Student Council Elections</h3></li>
                  <li><h3>Teachers' Day</h3></li>
                  <li><h3>Educational Trips</h3></li>
                  <li><h3>Sports Festival</h3></li>
                  <li><h3>Duel between Magic</h3></li>
                  <li><h3>Opening of Theater</h3></li>
                </ul>
        </div>
    </div>
    <div className="news">
        <h2>News and Announcements</h2>
        <br></br>
        <h4>Curabitur molestie id ligula at pellentesque. Cras placerat, tortor sed venenatis porttitor, nisi leo volutpat massa, ut accumsan mi libero vitae libero. Mauris non posuere lacus, quis bibendum leo. Integer.</h4>
        <h4>Maecenas ornare varius nunc a congue. Sed sit amet sodales quam. Aliquam eleifend, neque eu venenatis tempor, lectus ipsum fringilla metus, a feugiat felis lectus nec dolor. In vitae mattis.</h4>
        <h4>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ac libero feugiat, rutrum arcu ut, cursus magna. Nam imperdiet est sapien, ultrices tincidunt magna fringilla quis. Etiam at justo est. Morbi eget risus risus. Cras ornare in risus a bibendum. In consequat ex vitae est congue.</h4>
        <h4>Phasellus pellentesque vestibulum nibh, congue pulvinar risus vestibulum et. Morbi nisl orci, pulvinar at odio sed, ornare pretium augue. Nulla suscipit dolor malesuada tempor sagittis. Nullam viverra semper diam, id volutpat mauris fringilla eu. Sed congue ante sed nibh sagittis, et congue ante pretium. Etiam vehicula nec risus posuere vehicula.</h4>
    </div>
    </>
  );
}

export function AddCourse() {
  return(
      <>
      <h1>Test</h1>
      </>
  );
}
