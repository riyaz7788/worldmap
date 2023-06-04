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
    const [uncover, setUncover] = useState(false)
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
        }, 3000);
        setTimeout(() => {
            setUncover(true);
        }, 400);
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
        <div id='mobilebiewonly'>
            <div className='container-fluid milkybar-bg '>
                <div className="d-flex">
                    <div className=" p-2"><img className='logoMilky' src="/images/milkybarLogo.png" alt='logo' /></div>
                    <div className="p-2" data-toggle="modal" data-target="#exampleModalCenter" >
                        <img className='infoExplore' id='info' src='/images/infoLogo.png' alt='info' />
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <img className="landingpages" src='/images/earthrotation.gif' />
                </div>

                <FadeIn>
                    <div>   {treasure && <img id='hideMeAfter5Seconds' className="chestanim" src='/images/chestanimation.gif' />}
                    </div>
                    <div className=''>

                        <div id='hideMeAfter5Seconds'>
                            {uncover && <><span className='font-face-gm  uncoverbox cssanimation sequence fadeInBottom'>Uncover the <br />treasure <br /><span className=' text-white'>box!</span> </span>
                            </>}
                        </div>
                        {
                            showText && <><span className='font-face-gm headings cssanimation sequence fadeInBottom'>Ready to <br /> discover <br />  <span className='text-white'>the world!</span> </span>
                            </>}
                        <div className='d-flex justify-content-center'>
                            {exploreButton && <button id='start' className="btn  justify-content-center cssanimations explorebutton sequences fadeInBottoms font-face-gm text-white " onClick={() => Arscene()} >Start Exploring</button>}
                        </div>
                    </div>
                </FadeIn>
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