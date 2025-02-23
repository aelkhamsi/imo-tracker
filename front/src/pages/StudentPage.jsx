import { useParams } from 'react-router-dom';
import './student-page.css'

const StudentPage = () => {
  const { slug } = useParams();
  return (
    <div className='student-page-container'>
      <header>
        {slug}
      </header>
      
    </div>
  )
}

export default StudentPage
