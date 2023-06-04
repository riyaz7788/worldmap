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
    
    <div className='triviaBg  container-fluid hideForDesktop' >
    
      <div className='clouds'>
        <h2 className='triviaQuestions text-center font-face-gm'>Trivia <br /> Question</h2>
       <div className=' d-flex justify-content-center'>
       <img className='cloudimage' src='/images/cloud.png'  />
       </div>
      </div>
      {/* <div className='d-flex justify-content-end'>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"/>

      </div> */}
      <div className='questions d-flex justify-content-center container px-5 py-4'>
        <p className='text-white font-face-gm'> What is the name of the mountain in Asia that has the highest elevation above sea level?  </p>
      </div>
      <div className='onHoverAnswer align-items-center container py-5'>
        <button type="button" onClick={hideOptions} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Kilimanjaro
          {options && <div className="collapse" id="collapseExample">
            <div class="card card-body">
              Perfect,Correct Answer!
            </div>
          </div>}
        </button>

        <button type="button" onClick={hideOption} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">Everest
          {option && <div className="collapse" id="collapseExample1">
            <div class="card card-body">
              oops,Wrong Answer!
            </div>
          </div>}

        </button>

        <button type="button" onClick={hideOptional} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">Fuji
          {optional && <div className="collapse" id="collapseExample2">
            <div class="card card-body">
              oops,Wrong Answer!
            </div>
          </div>}
        </button>
         
      </div>

      <div className=' d-flex justify-content-center'>
        <p className='checkAnswer text-white font-face-gm '>Check Answer</p>
      </div>
      <div className='treeImage justify-content-start'>
        <img src='/images/tree.png' />
      </div>
    </div>
  )
}

export default TriviaQuestion