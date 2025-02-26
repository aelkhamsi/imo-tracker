import imoLogo from '/imo_logo.svg'
import './homepage.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getStudents } from '../../api/UsersApi';
import { getStudentSlug } from '../../utils/slug';
import { DEFAULT_STUDENTS } from '../students';

const Homepage = () => {
  const [students, setStudents] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getStudents()
      .then(students => {
        if (!students) setStudents(DEFAULT_STUDENTS)
        else setStudents(students)
      })
      .catch(() => {
        setStudents(DEFAULT_STUDENTS)
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
      <hr />

      <div className='table-list'>
        <h2>General Progress</h2>
        <table>
          <tbody>
            <tr onClick={() => navigate('/summary')}>
              <td>General Progress</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='table-list'>
        <h2>Individual Progress</h2>
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
