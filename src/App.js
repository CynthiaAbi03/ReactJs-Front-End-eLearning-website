import './App.css';
import {Routes, Route} from 'react-router-dom'
import React from 'react';
import {
  Home,
  Connection,
  TeacherLogin,
  StudentLogin,
  StudentCourses,
  TeacherCourses,
  AdminPage,
} from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="connection" element={<Connection/>}/>
      <Route path="teacherLogin" element={<TeacherLogin/>}/>
      <Route path="studentLogin" element={<StudentLogin/>}/>
      <Route path="studentCourses" element={<StudentCourses/>}/>
      <Route path="teacherCourses" element={<TeacherCourses/>}/>
      <Route path="adminPage" element={<AdminPage/>}/>
    </Routes>
  );
}

export default App;
