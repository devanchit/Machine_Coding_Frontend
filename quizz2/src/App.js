import { useState } from 'react';
import './App.css';
import Quiz from './Components/Quiz';

function App() {
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York' },
				{ answerText: 'London' },
				{ answerText: 'Paris' },
				{ answerText: 'Dublin' },
			],
      answer: "Paris"
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos' },
				{ answerText: 'Elon Musk' },
				{ answerText: 'Bill Gates' },
				{ answerText: 'Tony Stark' },
			],
      answer: "Elon Musk"
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple' },
				{ answerText: 'Intel' },
				{ answerText: 'Amazon' },
				{ answerText: 'Microsoft' },
			],
      answer: "Apple"
		}]


    const [currQuesIndex, setCurrQuesIndex] = useState(0);
    const [selectedAns, setSelectedAns] = useState(null);
    const [score, setScore] = useState(0);

    function handleNextQues(){

      if(selectedAns === questions[currQuesIndex].answer){
        setScore((prev) => prev+1)
        // console.log(score)
      }
        

      setCurrQuesIndex((prev) => prev+1)
      setSelectedAns(null)
    }

    function handleSelectedAns(option){
      setSelectedAns(option);
    }




  return (
    <div className="App">
      {questions.length > currQuesIndex ? (
        <>
          <Quiz
            question={questions[currQuesIndex].questionText}
            options={questions[currQuesIndex].answerOptions}
            handleSelectedAns={handleSelectedAns}
            selectedAns={selectedAns}
          />
          <button disabled={selectedAns===null} className={`next ${selectedAns? 'enable': 'disable'}`} onClick={handleNextQues}>Next Question</button>
        </>
      ) : (
        <>
          <div> score is : {score}</div>
        </>
      )}
    </div>
  );
}

export default App;
