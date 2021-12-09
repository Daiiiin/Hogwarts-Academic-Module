import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import AdminHome from './components/admin/homepage';
import ProfHome from './components/professor/homepage';

import StudentHeader  from './components/student';
import { Home, AddCourse } from './components/student';

const rootElement = document.getElementById("root");
render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="admin" element={<AdminHome />}/>
        <Route path="professor" element={<ProfHome />}/>
        <Route path="student" element={<StudentHeader />}>
          <Route index element={<Home />}/>
          <Route path="add-course" element={<AddCourse />}/>
        </Route>
      </Routes>
    </BrowserRouter>,
  rootElement
);
