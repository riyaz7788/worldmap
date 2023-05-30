import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import '../App.css'
function Explore() {
    const [display, setDisplay] = useState(true);
    const [beginGame, setBeginGame] = useState(true);
    const [showText, setTextHide] = useState(false);
    const [exploreButton, setExploreButton] = useState(false);
    const [treasure, setTreasure] = useState(false);
    const [globe, setGlobe] = useState(false);
    const [chest, setChest] = useState(true);
    const [instruction, setInstruction] = useState(false);
    // const arscene = document.getElementById('arscene')
    // arscene.style.display="block"  


    const Arscene = () => {
        // window.location.reload();
        setDisplay(false)
        const arscene = document.getElementById('arscene')
        arscene.style.display = "block"
    }
    const info = () => {
        console.log("info");
        setInstruction(true)
    }
    const startToExplore = () => {
        setBeginGame(false);
        const exploring = document.getElementById('screen-2')
        exploring.style.display = "block"
    }
    useEffect(() => {
        setTimeout(() => {
            //unstrasure box
            setGlobe(true)
        }, 300);
        setTimeout(() => {
            //rotating treasure
            setTreasure(true)
        }, 2000);
        setTimeout(() => {
            //test ready to explore
            setTextHide(true)
        }, 4500);
        setTimeout(() => {
            //button
            setExploreButton(true)
        }, 5000);
        return () => clearTimeout();
    }, [])

    return (
        <div>


            <div>
                {display && <div id='screen-2' className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 hideForDesktop">
                        <div className="card  text-white">
                            <div className="card-body milkybar-bg  p-3 text-center">
                                <div className="mb-md-5 mt-md-4 pb-4">
                                    <div className="d-flex">
                                        <div className=" p-2"><img className='logoMilky' src="/images/milkybarLogo.png" alt='logo' /></div>
                                        <div className="p-2" data-toggle="modal" data-target="#exampleModalCenter" >
                                            <img className='infoExplore' id='info' src='/images/infoLogo.png' alt='info' />
                                        </div>
                                    </div>
                                    <div className='land-page'>
                                        <img className="landing-page" src='/images/earthrotation.gif' />
                                        <FadeIn>
                                            <div>   {treasure && <img id='hideMeAfter5Seconds' className="chestanim" src='/images/chestanimation.gif' />}
                                            </div>
                                            <div>
                                            </div>
                                        </FadeIn>
                                        <div id='hideMeAfter5Seconds'>
                                            <h2 className='font-face-gm header-text aligned cssanimation sequence fadeInBottom'>Uncover the<br /> treasure  <br />
                                            </h2> <h1 className='cssanimation aligned sequence fadeInBottom world font-face-gm'>box!</h1>
                                        </div>
                                        {
                                            showText && <><h2 className='font-face-gm header-text cssanimation sequence fadeInBottom'>Ready to <br /> discover <br /> </h2>
                                                <h1 className='cssanimation sequence fadeInBottom world font-face-gm'>the world!</h1>
                                                {exploreButton && <button id='enable-btn' className="btn cssanimations sequences fadeInBottoms btn-info md font-face-gm text-white btn-animated" onClick={() => Arscene()} >Start Exploring</button>}
                                            </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>


            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content popupInstruction justify-content-center">
                        
                        <div className="modal-header justify-content-center">
                            {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                            <h5 className="modal-title instructionModalTitle font-face-gm" id="exampleModalLongTitle">Instructions</h5>
                        </div>
                        <div className="modal-body font-face-gm">
                            <p>1. Scan the pack to start the AR Experience.</p>
                            <p>2. Tap on the globe to choose the continent you want to discover.</p>
                            <p>3. Find a flat surface to place the continent.</p>
                            <p>4. Tap on the treasure chest to answer the trivia questions.</p>
                            <p>5. To Unlock the continent,discover all the three treasure box.</p>
                            <p>6. Upload your passport, download and share</p>

                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn instructionCloseButton font-face-gm" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore