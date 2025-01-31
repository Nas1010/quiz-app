import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
      <div className='container'>
          <h1>Macbeth Quiz</h1>
          <hr />
          <h2>Who says the line,"Fair is foul, and foul is fair"?</h2>
          <ul>
              <li>Macbeth</li>
              <li>Lady Macbeth</li>
              <li>The Witches</li>
              <li>Banquo</li>
          </ul>
          <button>Next</button>
          <div className='index'>1 0f 5 questions</div>
      
    </div>
  )
}

export default Quiz
