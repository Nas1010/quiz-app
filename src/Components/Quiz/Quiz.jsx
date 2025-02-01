import React, { useState, useRef } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index])
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let optionArray = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1)
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                optionArray[question.ans - 1].current.classList.add("correct");
            }
        }
    }
    
    const next = () => {
        if (lock === true) {
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            optionArray.map((option)=> {
    option.current.classList.remove("wrong");
    option.current.classList.remove("correct");
    return null;
})
        }
    }

  return (
      <div className='container'>
          <h1>Macbeth Quiz</h1>
          <hr />
          <h2> {index + 1} {question.question} </h2>
          <ul>
              <li ref={Option1} onClick={(e)=> {checkAns(e, 1)}}>{question.option1}</li>
              <li ref={Option2} onClick={(e)=> {checkAns(e, 2)}}>{question.option2}</li>
              <li ref={Option3} onClick={(e)=> {checkAns(e, 3)}}>{question.option3}</li>
              <li ref={Option4} onClick={(e)=> {checkAns(e, 4)}}>{question.option4}</li> 
          </ul>
          <button onClick = {next}>Next</button>
          <div className='index'>{index + 1} of {data.length} questions</div>
      
    </div>
  )
}

export default Quiz
