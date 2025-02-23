import imoLogo from '/imo_logo.svg'
import './homepage.css'
import { students, getStudentSlug } from '../data/students'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

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
