import { useState } from "react";
import "./App.css";
import Quiz from "./Components/Quiz";
import questions from "./questions.json";

function App() {
  const [currQuesIndex, setCurrQuesIndex] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [score, setScore] = useState(0);

  function handleNextQuestion() {
    var iscorrect = questions[currQuesIndex].answerOptions.find(
      (option) => option.answerText === selectedAns
    ).isCorrect;

    if (iscorrect) setScore((prev) => prev + 1);

    setSelectedAns(null);
    setCurrQuesIndex(currQuesIndex + 1);
  }

  function handleSelectedAnswer(option) {
    setSelectedAns(option);
    console.log(option + "nnnnnnnnnnnnnnn");
  }

  // console.log(questions)
  return (
    <div className="App">
      <h1>Wecome to QUIZZZ</h1>
      <h2>Answer the below question bitch</h2>
      {currQuesIndex < questions.length ? (
        <>
          <Quiz
            question={questions[currQuesIndex].questionText}
            options={questions[currQuesIndex].answerOptions}
            handleSelectedAnswer={handleSelectedAnswer}
          />
          <button
            className="next"
            onClick={handleNextQuestion}
            disabled={selectedAns == null}
          >
            next question
          </button>
        </>
      ) : (
        <>test completed</>
      )}
      <div>Score is {score}</div>
    </div>
  );
}

export default App;
