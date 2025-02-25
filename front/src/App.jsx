import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import StudentPage from './pages/student-page/StudentPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:slug" element={<StudentPage />} />
      </Routes>
    </>
  )
}

export default App