import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheet/homepage.css';
import '../stylesheet/about.css';
import event_pic from "../img/event_img.jpg";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, Table, Button } from 'react-bootstrap';
import mainLogo from "../img/school-logo.png";
import AboutUs from "../img/about_us.jpg";
import Slytherin from "../img/slytherin.png";
import Hufflepuff from "../img/hufflepuff.png";  
import Gryffindor from "../img/gryffindor.png";    
import Ravenclaw from "../img/ravenclaw.png";  
import '../stylesheet/homepage.css';
import { LogOut } from "./action";
import Footer from "./footer";

export function ProfHeader() {      
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
          <Link to="/professor" className="nav-link">Home</Link>
          <Link to="/professor/courses" className="nav-link">Courses</Link>
          <Link to="/professor/about" className="nav-link">About</Link>
          <LogOut />
        </Nav>
        </Container>
        </Navbar>
        <Outlet />
      </>
    );    
}

  export function ProfHome() {
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

  export function ManageCoursefromProf() {
    return(
        <>
        <div className='ManageStudent'>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Student Name</th>
                <th>Midterm Grade</th>
                <th>Final Grade</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Potions</td>
                <td>Hermoine Granger</td>
                <td>1.2</td>
                <td>1.4</td>
                <td>
                <Button href="/professor/gradeadd" variant="info" type="submit">Add / Edit</Button>{' '}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Footer />
        </>
    );
}

export function AddGrade() {
  return(
      <> 
      <div className="manageStud">
          <h1>Add Grade</h1>
            <form>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Midterm Grade:</label>
                <div class="col-sm-10">
                  <input type="text"class="form-control" placeholder="" ></input>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Final Grade:</label>
                <div class="col-sm-10">
                  <input type="text"class="form-control" placeholder="" ></input>
                </div>
              </div>
              <br></br>
              <button class="btn btn-primary" type="submit">Submit</button>     
            </form>
            <br></br>
            <button type="button"class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Edit Course Grades</h5> 
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Midterm Grade:</label>
                          <div class="col-sm-10">
                            <input type="text"class="form-control" placeholder="" ></input>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Final Grade:</label>
                          <div class="col-sm-10">
                          <input type="text"class="form-control" placeholder="" ></input>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-success">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>  
      </div>  
      <Footer />
      </>
  );
}

export function AboutUsProf() {
  return(
      <>
      <div className='about_page'>
        <h1>Welcome to Hogwarts!</h1>
        <div class="container">  
          <div className='first'>
            <img
            src={AboutUs}
            width="100%"
            height="auto"
            alt="About Us"
            />
          </div>  
          <div className='second'>
            <p>
            Since its founding, Hogwarts has committed to offering the best educational experience in a structured, supportive environment. Our boarding and day program for boys in grades four through nine is unique in its ability to meet each student at his learning threshold and then truly maximize his potential. Hogrwarts parents frequently give us credit for providing what is a transformative experience for their sons.

            Hogwarts was founded around 990 A.D.  Practicality and compassion drove the genesis, along with a commitment to providing a structured, supportive, and challenging academic environment. Hogwart's diverse offerings and character education have contributed to the development of superbly well-rounded young men for over a century. Hogwarts students, then and now, are encouraged to take risks with the knowledge that sometimes they will fail, but the support of their school community will never waver. Basic tenets such as determination, compassion, and tolerance guided Hillside students in 1901, just as they do today. The relevance of Hogwart's founding principles remains, and these values continue to shape the school community.
            </p>
          </div>   
        </div>
        <br></br>
        <br></br>
        <br></br>
        <center><h1>THE FOUR HOUSES</h1></center>
        <div class="container2">  
          <div className='slytherin'>
            <div><img
            src={Slytherin}
            width="100%"
            height="auto"
            alt="Slytherin"
            /></div>
            <div className='slytherin-text'><p>Our emblem is the serpent, the wisest of creatures; our house colours are emerald green and silver, and our common room lies behind a concealed entrance down in the dungeons. As you’ll see, its windows look out into the depths of the Hogwarts lake. We often see the giant squid swooshing by – and sometimes more interesting creatures. We like to feel that our hangout has the aura of a mysterious, underwater shipwreck.</p></div>
          
          </div>  
          <div className='hufflepuff'>
            <div><img
            src={Hufflepuff}
            width="100%"
            height="auto"
            alt="hufflepuff"
            /></div>
            <div className='hufflepuff-text'><p>Our emblem is the badger, an animal that is often underestimated, because it lives quietly until attacked, but which, when provoked, can fight off animals much larger than itself, including wolves. Our house colours are yellow and black, and our common room lies one floor below the ground, on the same corridor as the kitchens.</p></div>
          
          </div>   
        </div>

        <div class="container3">  
          <div className='ravenclaw'>
            <div>
              <img
                src={Ravenclaw}
                width="100%"
                height="auto"
                alt="ravenclaw"
                />
            </div>
            <div className='ravenclaw-text'><p>Our emblem is the eagle, which soars where others cannot climb; our house colours are blue and bronze, and our common room is found at the top of Ravenclaw Tower, behind a door with an enchanted knocker. The arched windows set into the walls of our circular common room look down at the school grounds: the lake, the Forbidden Forest, the Quidditch pitch and the Herbology gardens. No other house in the school has such stunning views.</p></div>
          </div>  
          <div className='gryffindor'>
            <div><img
            src={Gryffindor}
            width="100%"
            height="auto"
            alt="gryffindor"
            /></div>
            <div className='gryffindor-text'><p>Our emblem is the lion, the bravest of all creatures; our house colours are scarlet and gold, and our common room lies up in Gryffindor Tower.</p></div>
          </div>   
        </div>
                  
      </div>
      <Footer />
      </>
  );
}
  
