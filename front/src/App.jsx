import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import StudentPage from './pages/student-page/StudentPage';
import SummaryPage from './pages/summary-page/SummaryPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:slug" element={<StudentPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </>
  )
}

export default App