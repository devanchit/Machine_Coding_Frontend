import React from 'react'

const Quiz = ({question, options,handleSelectedAns,selectedAns }) => {
  return (
    <>
    <div className='question'>{question}</div>
    
    {options.map((option,index) => (
        <li className={`option ${selectedAns ===option.answerText ? "selected" : ""}`}
        key = {index}  onClick={ () =>handleSelectedAns(option.answerText)}>
            {option.answerText}
        </li>
    ))}
    

    </>
  )
}

export default Quiz