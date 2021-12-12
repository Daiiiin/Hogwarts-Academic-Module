import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';

import { AdminHeader, AdminHome, ManageStud, AddStud, ManageProf, AddProf, InfoStud, InfoProf, ManageCourse, AddCoursefromAd, InfoCourse } from './components/admin';
import { ProfHeader, ProfHome } from './components/professor';
import { StudentHeader, StudentHome, AddCourse } from './components/student';

const rootElement = document.getElementById("root");
render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>

        <Route path="admin" element={<AdminHeader />}>
          <Route index element={<AdminHome />}/>
          <Route path="student" element={<ManageStud />}/>
          <Route path="student/studentadd" element={<AddStud />}/>
          <Route path="student/:studentID" element={<InfoStud />}/>
          <Route path="instructor" element={<ManageProf />}/>
          <Route path="instructor/instructoradd" element={<AddProf />}/>
          <Route path="instructor/:profID" element={<InfoProf />}/>
          <Route path="course" element={<ManageCourse />}/>
          <Route path="course/courseadd" element={<AddCoursefromAd />}/>
          <Route path="course/:subjectID" element={<InfoCourse />}/>
        </Route>

        <Route path="professor" element={<ProfHeader />}>
          <Route index element={<ProfHome />}/>
          {/* Course */}
          {/* About */}
        </Route>

        <Route path="student" element={<StudentHeader />}>
          <Route index element={<StudentHome />}/>
          <Route path="add-course" element={<AddCourse />}/>
          {/* View Grades */}
          {/* About */}
        </Route>

      </Routes>
    </BrowserRouter>,
  rootElement
);
