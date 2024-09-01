import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import CoursePage from "@/pages/course";
import CreatePage from "@/pages/teacher/create";
import LoginTeacher from "@/pages/teacher/login";
import RegisterTeacher from "@/pages/teacher/register";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<LoginTeacher />} path="/teacher/login" />
      <Route element={<RegisterTeacher />} path="/teacher/register" />
      <Route element={<CreatePage />} path="/teacher/create" />
      <Route element={<CoursePage />} path="/create" />
    </Routes>
  );
}

export default App;
