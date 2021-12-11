import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheet/homepage.css';
import '../stylesheet/admin-manage-stud.css';
import event_pic from "../img/event_img.jpg";
import { Outlet, Link, useParams } from "react-router-dom";
import { Navbar, Container, Nav, Button, Table, Row, Col, Tab } from 'react-bootstrap';
import mainLogo from "../img/school-logo.png"; 
import '../stylesheet/homepage.css';
import Footer from "./footer";
import { Formik, Form } from "formik";
import axios from 'axios';
import { 
  FetchProfs, FetchStudents, FetchSubjects2, LogOut, MyTextInput, MySelect, 
  addStudentSchema, FetchSubjects, addProfSchema
} from "./action";

export function AdminHeader() {
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
            <Link to="/admin" className="nav-link">Home</Link>
            <Link to="/admin/student" className="nav-link">Student</Link>
            <Link to="/admin/instructor" className="nav-link">Instructor</Link>
            <Link to="/admin/course" className="nav-link">Course</Link>
            <LogOut />
          </Nav>
          </Container>
          </Navbar>
          <Outlet />
        </>
    ); 
}

export function AdminHome() {
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
      <Footer />
      </>
    );
}

export function ManageStud() {
    return(
        <>
        <div className='ManageStudent'>
          <Button href="/admin/studentAdd" size="lg">Add Student</Button>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Year Level</th>
                <th>House</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <FetchStudents />
            </tbody>
          </Table>
        </div>
        <Footer />
        </>
    );
}

export function AddStud() {
    return(
        <>
        <div className="manageStud">
          <h1>Add Student</h1>
          <Formik
            initialValues = {{ 
              fname: '', 
              mname: '', 
              lname: '', 
              email: '', 
              password: '',
              year: '',
              house: ''
            }}
            validationSchema = { addStudentSchema }
            onSubmit={(values) => {
              let formData = new FormData();
              formData.append('fname', values.fname);
              formData.append('mname', values.mname);
              formData.append('lname', values.lname);
              formData.append('email', values.email);
              formData.append('password', values.password);
              formData.append('year', values.year);
              formData.append('house', values.house);
              axios({
                method: 'POST',
                url: 'http://localhost/Hogwarts-Academic-Module/src/php/add-student-action.php',
                data: formData,
                config: { headers: {'Content-Type': 'multipart/form-data' }},
                withCredentials: true
              })
              .then(function(res) {
                console.log(res.data);
              })
              .catch(function(error) {
                console.log(error);
              });
            } 
          }
          > 
          <Form>
            <MyTextInput
                label="First Name"
                name="fname"
                type="text"
                placeholder="First Name"
                className="form-control"
            />
            <MyTextInput
                label="Middle Name"
                name="mname"
                type="text"
                placeholder="Middle Name"
                className="form-control"
            />
            <MyTextInput
                label="Last Name"
                name="lname"
                type="text"
                placeholder="Last Name"
                className="form-control"
            />
            <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Last Name"
                className="form-control"
            />
            <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
            />
            <MySelect className="form-select" label="Year Level" name="year">
              <option value="">Select Year Level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </MySelect>
            <MySelect className="form-select" label="House" name="house">
              <option value="">Select House</option>
              <option value="1">Gryffindor</option>
              <option value="2">Hufflepuff</option>
              <option value="3">Ravenclaw</option>
              <option value="4">Slytherin</option>
            </MySelect>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
          </Formik>
          </div>
        <Footer />
        </>
    );
}

export function InfoStud() {
  const params = useParams();
  const [grade, setGrade] = useState([]);
  const [detail, setDetail] = useState([]);

  

  

  useEffect(() => { 
    const getGradeDetails = () => {
      axios({
        method: 'GET',
        url: `http://localhost/Hogwarts-Academic-Module/src/php/fetch-student-grades-action.php?id=${params.studentID}`,
        withCredentials: true
      })
      .then(function(res) {
        const result = res.data;
        setGrade(result);
      });
    }
    getGradeDetails()
  }, [params.studentID]);


  useEffect(() => {
    const getStudentDetails = () => {
      axios({
        method: 'GET',
        url: `http://localhost/Hogwarts-Academic-Module/src/php/fetch-student-action.php?id=${params.studentID}`,
        withCredentials: true
      })
      .then(function(res) {
        const result = res.data;
        setDetail(result);
      });
    }
    getStudentDetails() 
  }, [params.studentID]);
  return(
      <>
      <div className="infoStud">
        <h2>Student Info</h2>
        <br></br>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">General Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Course and Grades</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <form>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Full Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="" placeholder="" defaultValue={detail.fullname} readOnly></input>
                  </div>
                </div>
                <br></br>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="" placeholder="" defaultValue={detail.email} readOnly></input>
                  </div>
                </div>
                <br></br>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Year Level:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="" placeholder="" defaultValue={detail.year_level} readOnly></input>
                  </div>
                </div>
                <br></br>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">House:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="" placeholder="" defaultValue={detail.house} readOnly></input>
                  </div>
                </div>
                <br></br>
              </form>
              <button type="button" id="edit-button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
              </button>
              <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Edit Student Information</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">First Name:</label>
                          <div className="col-sm-10">
                            <input type="text"className="form-control" placeholder="" ></input>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Middle Name:</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="" placeholder="" ></input>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Last Name:</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="" placeholder="" ></input>
                          </div>
                        </div>
                        
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Email:</label>
                          <div className="col-sm-10">
                            <input type="email" className="form-control" id="" placeholder="" ></input>
                          </div>
                        </div>
                        <br></br>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Year Level:</label>
                          <div className="col-sm-10">
                            <select className="form-select" label="Year Level" name="year">
                              <option value="">Select Year Level</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">House:</label>
                          <div className="col-sm-10">
                            <select className="form-select" label="Year Level" name="year">
                              <option value="">Select House</option>
                              <option value="1">Gryffindor</option>
                              <option value="2">Hufflepuff</option>
                              <option value="3">Ravenclaw</option>
                              <option value="4">Slytherin</option>
                            </select>
                          </div>
                        </div>

                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Course Name</th>
                      <th>Professor</th>
                      <th>Midterm Grade</th>
                      <th>Final Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grade.map((grades, i) => (
                      <tr key={grades.gradeID}>
                        <td>{i+1}</td>
                        <td>{grades.subject_name}</td>
                        <td>{grades.prof}</td>
                        <td>{grades.midtermGrade}</td>
                        <td>{grades.finalGrade}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
      <Footer />
      </>
  );
}

export function ManageProf() {
    return(
        <>
        <div className='ManageStudent'>
          <Button href="/admin/profadd" size="lg">Add Instructor</Button>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <FetchProfs />
            </tbody>
          </Table>
        </div>
        <Footer />
        </>
    );
}

export function AddProf() {
    return(
        <>
        <div className="manageStud">
          <h1>Add Instructor</h1>
          <Formik
            initialValues = {{ 
              fname: '', 
              mname: '', 
              lname: '', 
              email: '', 
              password: '',
              subject: ''
            }}
            validationSchema = { addProfSchema }
            onSubmit={(values) => {
              let formData = new FormData();
              formData.append('fname', values.fname);
              formData.append('mname', values.mname);
              formData.append('lname', values.lname);
              formData.append('email', values.email);
              formData.append('password', values.password);
              formData.append('subject', values.subject);
              axios({
                method: 'POST',
                url: 'http://localhost/Hogwarts-Academic-Module/src/php/add-prof-action.php',
                data: formData,
                config: { headers: {'Content-Type': 'multipart/form-data' }},
                withCredentials: true
              })
              .then(function(res) {
                console.log(res.data);
              })
              .catch(function(error) {
                console.log(error);
              });
            } 
          }
          > 
            <Form>
              <MyTextInput
                  label="First Name"
                  name="fname"
                  type="text"
                  placeholder="First Name"
                  className="form-control"
              />
              <MyTextInput
                  label="Middle Name"
                  name="mname"
                  type="text"
                  placeholder="Middle Name"
                  className="form-control"
              />
              <MyTextInput
                  label="Last Name"
                  name="lname"
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
              />
              <MyTextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Last Name"
                  className="form-control"
              />
              <MyTextInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-control"
              />
              <MySelect className="form-select" label="Subject" name="subject">
                <option value="">Select Subject</option>
                <FetchSubjects />
              </MySelect>
              <br></br>
              <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
          </Formik>
          </div>
          
        <Footer />
        </>
    );
}

export function InfoProf() {
  return(
      <>
      <div className="infoStud">
        <h2>Professor Info</h2>
        <br></br>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">General Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Course Handled</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <form>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Full Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="" placeholder="" readOnly></input>
                  </div>
                </div>
                <br></br>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="" placeholder="" readOnly></input>
                  </div>
                </div>
                <br></br>
              </form>
              <button type="button" id="edit-button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
              </button>
              <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Edit Student Information</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">First Name:</label>
                          <div className="col-sm-10">
                            <input type="text"className="form-control" placeholder="" ></input>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Middle Name:</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="" placeholder="" ></input>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Last Name:</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="" placeholder="" ></input>
                          </div>
                        </div>
                        
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Email:</label>
                          <div className="col-sm-10">
                            <input type="email" className="form-control" id="" placeholder="" ></input>
                          </div>
                        </div>
                        <br></br>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Course Name</th>
                      <th>Course Description</th>
                      <th>Schedule</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Potions</td>
                      <td>Potions is described as the art of creating mixtures with magical effects. It required the correct mixing and stirring of ingredients at the right time</td>
                      <td>MWF 9:00 AM - 10:30 AM</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
      <Footer />
      </>
  );
}

export function ManageCourse() {
  return(
      <>
      <div className='ManageStudent'>
        <Button href="/admin/courseAdd" size="lg">Add Course</Button>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Course Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <FetchSubjects2 />
          </tbody>
        </Table>
      </div>
      <Footer />
      </>
  );
}

export function AddCoursefromAd() {
  return(
      <> 
      <div className="manageStud">
          <h1>Add Course</h1>
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Course Name:</label>
                <div className="col-sm-10">
                  <input type="text"className="form-control" placeholder="" ></input>
                </div>
              </div>
              <br></br>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Course Description:</label>
                <div className="col-sm-10">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                </div>
              </div>
              <br></br>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Course Schedule:</label>
                <div className="col-sm-10">
                  <input type="text"className="form-control" placeholder="" ></input>
                </div>
              </div>
              <br></br>
              <button className="btn btn-primary" type="submit">Submit</button>       
            </form>
      </div>  
      <Footer />
      </>
  );
}
