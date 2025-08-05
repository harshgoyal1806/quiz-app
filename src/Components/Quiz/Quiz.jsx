import React, { useState, useEffect, useRef } from "react";
import { quizData } from "../../assets/data";
import "./Quiz.css";

// 🔀 Function to get 10 random questions
const getRandomQuestions = (data, count = 10) => {
  return data
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, count)
    .map(({ item }) => item);
};

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);

  // Refs for the 4 answer options
  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const optionArray = [option1, option2, option3, option4];

  // Load 10 random questions on mount
  useEffect(() => {
    const selected = getRandomQuestions(quizData, 10);
    setShuffledQuestions(selected);
  }, []);

  // If not loaded yet
  if (shuffledQuestions.length === 0) return <div>Loading quiz...</div>;

  const question = shuffledQuestions[index];

  const checkAnswer = (e, answer) => {
    if (!lock) {
      setLock(true);
      if (question.answer === answer) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        optionArray[question.answer - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (!lock) return;

    if (index + 1 === shuffledQuestions.length) {
      setResult(true);
      return;
    }

    setIndex((prev) => prev + 1);
    setLock(false);
    optionArray.forEach((option) =>
      option.current.classList.remove("correct", "wrong")
    );
  };

  const reset = () => {
    const selected = getRandomQuestions(quizData, 10);
    setShuffledQuestions(selected);
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    optionArray.forEach((option) =>
      option.current.classList.remove("correct", "wrong")
    );
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {!result ? (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={option1} onClick={(e) => checkAnswer(e, 1)}>
              {question.option1}
            </li>
            <li ref={option2} onClick={(e) => checkAnswer(e, 2)}>
              {question.option2}
            </li>
            <li ref={option3} onClick={(e) => checkAnswer(e, 3)}>
              {question.option3}
            </li>
            <li ref={option4} onClick={(e) => checkAnswer(e, 4)}>
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {shuffledQuestions.length} questions
          </div>
        </>
      ) : (
        <>
          <h2>
            You scored {score} out of {shuffledQuestions.length}
          </h2>
          <button onClick={reset}>Reset Quiz</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
