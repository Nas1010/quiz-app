import React, {useState, useRef} from "react"
import "./Quiz.css"
import {data} from "../../assets/data"

const Quiz = () => {
  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(data[0]) // Start with the first question
  let [lock, setLock] = useState(false)
  let [score, setScore] = useState(0)
  let [result, setResult] = useState(false)

  let optionRefs = useRef([])

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct")
        setScore((prev) => prev + 1)
      } else {
        e.target.classList.add("wrong")
        optionRefs.current[question.ans - 1].classList.add("correct")
      }
      setLock(true)
    }
  }

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true)
        return
      }

      setIndex((prevIndex) => {
        let newIndex = prevIndex + 1
        setQuestion(data[newIndex])
        return newIndex
      })

      setLock(false)
      optionRefs.current.forEach((option) => {
        option.classList.remove("wrong", "correct")
      })
    }
  }

  const reset = () => {
    setIndex(0)
    setQuestion(data[0])
    setScore(0)
    setLock(false)
    setResult(false)
  }

  return (
    <div className="container">
      <h1>Macbeth Quiz</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            {Object.keys(question)
              .filter((key) => key.startsWith("option")) // Get only the options
              .map((key, i) => (
                <li
                  key={i}
                  ref={(el) => (optionRefs.current[i] = el)}
                  onClick={(e) => checkAns(e, i + 1)}
                >
                  {question[key]}
                </li>
              ))}
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
    </div>
  )
}

export default Quiz
