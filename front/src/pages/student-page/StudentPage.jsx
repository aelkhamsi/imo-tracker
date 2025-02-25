import { useParams } from 'react-router-dom';
import { capitalize } from '../../utils/slug'
import './student-page.css'

const StudentPage = () => {
  const { slug } = useParams();
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT

  return (
    <div className='student-page-container'>
      <header>
        {capitalize(slug)}
      </header>

      <main>
        <div className='progression'>
          <div className='elo-progression'>
            <h2>ELO Progression</h2>
            <img src={`${apiEndpoint}/elo_progression/${slug}.png`} alt="" />
          </div>

          <div className='proba-progression-p1'>
            <h2>Proba Progression P1</h2>
            <img src={`${apiEndpoint}/proba_progression_p1/${slug}.png`} alt="" />
          </div>
        </div>

        <div className='proba-solving-p1'>
          <h2>Proba Solving P1</h2>
          <img src={`${apiEndpoint}/proba_solving_p1/${slug}.png`} alt="" />
        </div>
      </main>
      
    </div>
  )
}

export default StudentPage
