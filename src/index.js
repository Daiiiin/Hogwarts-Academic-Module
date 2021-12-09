import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';

import AdminHeader from './components/admin';
import { AdminHome } from './components/admin';

import ProfHeader from './components/professor';
import { ProfHome } from './components/professor';

import StudentHeader  from './components/student';
import { StudentHome, AddCourse } from './components/student';

const rootElement = document.getElementById("root");
render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>

        <Route path="admin" element={<AdminHeader />}>
          <Route index element={<AdminHome />}/>
          {/* Student */}
          {/* Instructor */}
          {/* Course  */}
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
