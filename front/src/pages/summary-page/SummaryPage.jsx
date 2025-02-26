import './summary-page.css'

const SummaryPage = () => {
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT

  return (
    <div className='summary-page-container'>
      <header>
        General Progress
      </header>

      <main>
        <div className='chart'>
          <h2>Probability of Solving P1 - Algebra</h2>
          <img src={`${apiEndpoint}/general/a-p1-imo-solving-proba.webp`} alt="" />
        </div>

        <div className='chart'>
          <h2>Probability of Solving P1 - Combinatorics</h2>
          <img src={`${apiEndpoint}/general/c-p1-imo-solving-proba.webp`} alt="" />
        </div>

        <div className='chart'>
          <h2>Probability of Solving P1 - Geometry</h2>
          <img src={`${apiEndpoint}/general/g-p1-imo-solving-proba.webp`} alt="" />
        </div>

        <div className='chart'>
          <h2>Probability of Solving P1 - Number Theory</h2>
          <img src={`${apiEndpoint}/general/n-p1-imo-solving-proba.webp`} alt="" />
        </div>
      </main>
    </div>
  )
}

export default SummaryPage
