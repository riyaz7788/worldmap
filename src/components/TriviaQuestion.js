import React, { useState } from 'react'
import '../App.css'
function TriviaQuestion() {
  const [options, setOptions] = useState(false);
  const [option, setOption] = useState(false);
  const [optional, setOptional] = useState(false);
  const hideOptions = () => {
    setOptions(true);
  }
  const hideOption = () => {
    setOption(true)
  }
  const hideOptional = () => {
    setOptional(true);
  }
  return (
    <div className='triviaBg  container hideForDesktop'>
      <div className='clouds'>
        <h2 className='triviaQuestions text-center font-face-gm'>Trivia <br /> Question</h2>
        <img className='cloudimage' src='/images/cloud.png' height="60px" />
      </div>
      <div className='questions container px-5 py-2'>
        <p className='text-white font-face-gm'>Q1: What is the name of the mountain in Asia that has the highest elevation above sea level?  </p>
      </div>
      <div className='onHoverAnswer align-items-center container py-3'>
        <button type="button" onClick={hideOptions} class="option font-face-gm " data-toggle="collapse" data-target="#demo">Kilimanjaro
          {options && <div id="demo" class="collapse in font-face-gm answerable ">
            Oops Wrong Answer!
          </div>}
        </button>

        <button type="button" onClick={hideOption} class="option font-face-gm " data-toggle="collapse" data-target="#demo1">Everest
          {option && <div id="demo1" class="collapse in font-face-gm answerable">
            Perfect,Correct Answer!
          </div>}

        </button>

        <button type="button" onClick={hideOptional} class="option font-face-gm " data-toggle="collapse" data-target="#demo2">Fuji
          {optional && <div id="demo2" class="collapse in font-face-gm answerable">
            Oops Wrong Answer!
          </div>}
        </button>

      </div>

      <div className='py-3'>
        <p className='checkAnswer text-white font-face-gm text-center'>Check Answer</p>
      </div>
      <div className='treeImage justify-content-start'>
        <img src='/images/tree.png' />
      </div>
    </div>
  )
}

export default TriviaQuestion