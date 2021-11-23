import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import AdminHome from './components/admin/pages/homepage';
import ProfHome from './components/admin/pages/homepage';
import StudentHome from './components/student/pages/homepage';

const rootElement = document.getElementById("root");
render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="admin" element={<AdminHome />}/>
        <Route path="professor" element={<ProfHome />}/>
        <Route path="student" element={<StudentHome />}/>
      </Routes>
    </BrowserRouter>,
  rootElement
);
