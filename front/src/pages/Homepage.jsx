import imoLogo from '/imo_logo.svg'
import './homepage.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getStudents } from '../api/UsersApi';
import { getStudentSlug } from '../utils/slug';

const Homepage = () => {
  const [students, setStudents] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getStudents()
      .then(students => {
        console.log('students', students)
        setStudents(students)
      })
  }, [])

  return (
    <div className='homepage-container'>
      <div>
        <a href="#">
          <img src={imoLogo} className="logo" alt="IMO logo" />
        </a>
      </div>

      <h1>IMO Tracker</h1>

      <div className='names'>
        <h2>Click to track your progression</h2>
        <table>
          <tbody>
            {students.map((student, index) => {
              const slug = getStudentSlug(student) 
              return (
                <tr key={`${slug}_${index}`} onClick={() => navigate(slug)}>
                  <td>{`${student?.firstName} ${student?.lastName}`}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Homepage
