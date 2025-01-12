import React from 'react'

const Quiz = ({question,options,handleSelectedAnswer}) => {
    console.log(question + "hahaha")
    console.log(options + "hahaha")

  return (
    <>
        <div className='question'>
            {question}
        </div>
        {options.map((option,index) =>(
            <li  className='option' onClick={ () => handleSelectedAnswer(option.answerText)} key={index}> {option.answerText} </li>
        )) }
        
    </>
  )
}

export default Quiz