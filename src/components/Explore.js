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
    // const arscene = document.getElementById('arscene')
    // arscene.style.display="block"  
    const Arscene = () => {
        // window.location.reload();
        setDisplay(false)
        const arscene = document.getElementById('arscene')
        arscene.style.display = "block"
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
            {display && <div id='screen-2' className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 hideForDesktop">
                    <div className="card  text-white">
                        <div className="card-body milkybar-bg  p-3 text-center">
                            <div className="mb-md-5 mt-md-4 pb-4">
                                <div class="d-flex">
                                    <div class=" p-2"><img className='logoMilky' src="/images/milkybarLogo.png" alt='logo' /></div>
                                    <div class="p-2"><img className='infoExplore' id='info' src='/images/infoLogo.png' alt='info' /></div>
                                </div>
                                <div className='land-page'>
                                    <img className="landing-page" src='/images/earthrotation.gif' />
                                    {/* {  globe &&  <h2 id='hideMeAfter5Seconds' className='font-face-gm header-text' >Uncover the  <br/>treasure<br/> box </h2> } */}
                                    {/* <div>                                  { treasure && <img  id='hideMeAfter5Seconds' className="chestanim" src='/images/chestanimation.gif'/>}
</div> */}
                                    <FadeIn>
                                        <div>                                  {treasure && <img id='hideMeAfter5Seconds' className="chestanim" src='/images/chestanimation.gif' />}
                                        </div>
                                        <div>                             <h2 id='hideMeAfter5Seconds' className='font-face-gm header-text cssanimation sequence fadeInBottom'>Uncover the <br /> treasure <br /> </h2><h1 id='hideMeAfter5Seconds' className='cssanimation sequence fadeInBottom world font-face-gm'>box</h1>
                                        </div>
                                    </FadeIn>

                                    {/* {                                    globe &&  <h2 id='hideHeader'  className='font-face-gm header-text slide-up' >Uncover the <br/> treasure <br/> box</h2>

} */}
                                    {
                                        showText && <><h2 className='font-face-gm header-text cssanimation sequence fadeInBottom'>Ready to <br /> discover <br /> </h2><h1 className='cssanimation sequence fadeInBottom world font-face-gm'>the world!</h1>
                                            {exploreButton && <button id='enable-btn' className="btn cssanimations sequences fadeInBottoms btn-info md font-face-gm text-white btn-animated" onClick={() => Arscene()} >Start Exploring</button>}
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Explore