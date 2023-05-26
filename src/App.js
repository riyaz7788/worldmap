import React, { useState, useCallback, useEffect, useRef } from 'react'
import './App.css';
import HTMLFlipBook from 'react-pageflip';
import Explore from './components/Explore';
import Page from './components/page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flatsurface from './components/Flatsurface';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Camera } from "react-camera-pro";
import html2pdf from 'html2pdf.js';
import TriviaQuestion from './components/TriviaQuestion';
//open passport function

function Passport() {
  const pdfRef = useRef();
  const onFlip = useCallback((e) => {
    console.log('Current page: ' + e.data);
  }, []);

  return (
    <HTMLFlipBook
      /* props */
      onFlip={onFlip}

    >
      /* ... pages */
    </HTMLFlipBook>
  )
}

function App(props) {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [display, setDisplay] = useState(true);
  const [click,setClick] = useState(false)
  const [beginGame, setBeginGame] = useState(true);
  const [showText, setTextHide] = useState(false)
  const [popup, setPopup] = useState(false);
  const [preview,setPreview]=useState(true);

  // const arscene = document.getElementById('arscene')

  // arscene.style.display="block"  
  const Arscene = () => {
    // window.location.reload();
    setDisplay(false)
    const arscene = document.getElementById('arscene')
    arscene.style.display = "block"
  }
  const startToExplore = () => {
    let name = document.getElementById("typeEmailX");
    //username is stored in vaiable, this can be used for passport.
    let username = document.getElementById("typeEmailX").value
    console.log(username, "username");
    let form = document.getElementById("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (name.value === '') {
        // alert("vlaid")
      } else {
        setBeginGame(false);
        const exploring = document.getElementById('screen-2')
        exploring.style.display = "block"
        setTimeout(() => {
          setTextHide(true)
        }, 3000);
      }
    })
  }
  const save = () => {
    let username = document.getElementById("playerfirstname").value
    // alert(username)
    let usernameonpassport = document.getElementById("usernameonpassport").innerHTML = username;
    // alert(usernameonpassport)

    // checkCookie(username);
    if (usernameonpassport == username) {
      setPopup(false);
    }
  }
  const editableOption = () => {
    setPopup(!popup);
  }
  const closeOption = () => {
    setPopup(false);
  }
  const hideCamera = () => {
    setImage(camera.current.takePhoto())
    setPreview(false)
  }
  const enableCamera = () => {
   console.log("clicked");
   setPreview(true)
  }
  const pdfRef = useRef();
  const downloadPdf = () => {
   


    const capture=document.querySelector('.downloaderpassport');
    html2canvas(capture).then((canvas)=>{
     const srcpath = canvas.toDataURL('img/png');
     const doc = new jsPDF('p','mm','a4');
     const componentWidth = doc.internal.pageSize.getWidth();
     const componentHeight = doc.internal.pageSize.getHeight();
     doc.addImage(srcpath,'png',0,0,componentWidth,componentHeight);
     doc.save('passport.pdf')

    })
    console.log("DOWNLOAD");
    // const input = pdfRef.current;
    // html2canvas(input).then((canvas) => {
    //   const imageData = canvas.toDataURL('/images/png');
    //   const pdf = new jsPDF('p', 'mm', 'a4', false);
    //   const pdfWidth = pdf.internal.pageSize.getWidth();
    //   const pdfHeight = pdf.internal.pageSize.getHeight();
    //   const imgWidth = canvas.width;
    //   const imgHeight = canvas.height;
    //   const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    //   const imgX = (pdfWidth - imgWidth * ratio) / 2;
    //   const imgY = 30;
    //   pdf.addImage(imageData,'PNG',
    //     imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    //   pdf.save('Passport.pdf');
    // })


  }
  // document
  // .getElementById("downloadPdf")
  // .addEventListener("click", function download() {
  //   const element = document.getElementById("invoice");
  //   html2pdf()
  //     .from(element)
  //     .save();
  // });
  document.addEventListener('DOMContentLoaded', () => {
    const downloadPdf = document.getElementById('downloadPdf');
  
    console.log(downloadPdf); // HTMLButtonElement object
  
    // ✅ Works as expected
    downloadPdf.addEventListener('click', () => {
      alert('You clicked the button');
    });
  });

  
  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // function checkCookie(usernameonpassport) {
  //   let user = getCookie("username");
  //   if (user != "") {
  //     if(usernameonpassport !="John"){
  //       setCookie("username", usernameonpassport, 30);
  //     }else{
  //       document.getElementById('usernameonpassport').innerHTML=user;
  //     }
  //   } else {
   
  //      if (user != "" && user != null) {
  //        setCookie("username", user, 30);
  //      }else if(usernameonpassport!= "John"){
  //        setCookie("username", usernameonpassport, 30);
  //      }
  //   }
  // }
  // useEffect(()=>{
  //   checkCookie("John");
  // },[])
  return (
    <>

      <Router>
        {/* <div id='mobile-view'>Please open in mobile....</div> */}
        {/* <Routes>
    <Route path='/explore' element={<Explore/>}/>
   </Routes> */}
        {/* <Flatsurface/>  */}



        {/* <div className="d-flex">
          <div className="p-3 flex-grow-2"><img src="/images/milkybarLogo.png" height="78px" width="160px" alt='logo' /></div>
          <div className="p-3 homeiconsd"><img src='/images/hometab.png'/></div>
          <div className="p-3 souv"><img src='/images/souveriantab.png'/></div>
       </div> */}
         <TriviaQuestion/>
        {/* <Explore/> */}

        {/* passport working */}
        {/* <div id='mobilebiewonly'>
          <div className='container milkybar-bg'>
              <div className="d-flex">
          <div className="p-3 flex-grow-2"><img src="/images/milkybarLogo.png" height="78px" width="160px" alt='logo' /></div>
          <div className="p-3 homeiconsd"><img src='/images/hometab.png'/></div>
          <span className='badged text-center'>9+</span>
          <div className="p-3 souv"><img src='/images/sourveni.png'/></div>
       </div>
          </div>
          <div>
            <div className='container justify-content-center align-items-center downloaderpassport'id="invoice">
              <img className='landingfly' src='/images/backgroundpassport.png' />
              <div className='bluepassbook'>
                <img className='mypass' src='/images/mypassport.png' />
                <div>
                  <div className='passportsection'>
                    <div className=""><div className=''>
                      <div className=''>
                        <img className='pages' src='/images/pages.png' />
                        <div className='top d-flex justify-content-end'>
                          <div className='px-1 py-2'>
                          <img className='profilesection' id='' src="/images/fallback.png" width="20px" height="40px" />
                            <img id='profileCameraImage' className='profilesection' src={image} width="20px" height="40px" />
                          </div>
                          <div className='px-2 py-2 text-dark font-face-gm'>
                            <font className="passportusername">Name</font> <br />
                            <font id="usernameonpassport" className="passportUser">John</font>
                            <p className='texttitle  font-face-gm'>IAM READY TO DISCOVER<br /> THE WORLD!</p>
                          </div>
                        </div>
                      </div>
                      <div className='bottompages'>
                        <img className='continentpages' src='/images/bottompage.png' />
                        <div className='bottom font-face-gm text-center px-2 py-1 yellow'><p className='yellow'> Containents Explored</p>
                          <div className='continents'>
                            <img className='northamerica' src='/images/northamerica.png' />
                            <img className='southamerica' src='/images/southamerica.png' />
                            <img className='antratica' src='/images/antratica.png' />
                            <img className='australia' src='/images/australia.png' />
                            <img className='africa' src='/images/africa.png' />
                            <img className='asia' src='/images/asia.png' />
                            <img className='europe' src='/images/europe.png' />
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="editBtn d-flex justify-content-end">
          <img onClick={downloadPdf}  className='downloadpassport' src='/images/downloadedbutton.png'/>
            <img className='editing' onClick={editableOption} src='/images/Editing.png'/>
          </div>        
          {popup ? <div className='w3-container w3-center w3-animate-top'>
            <div className='popupModal'>
              <div className='d-flex justify-content-end px-3 py-2'>
                <div className='close' onClick={closeOption}><img src='/images/closebtn.png' width="25px" /></div>
              </div>
              <div>
                <div className='camera'>
                {preview ? <div className='photo'>
                    <Camera className="smileplease" ref={camera} />
                    <div className='capturedPic' onClick={() => hideCamera()}><img src='/images/shutterbutton.png' /></div>
                  </div> :   <div className='photo'>
                    <div className=''>
                    <img className='previewProfileSection' id='clickedPic' src={image} width="170px" height="160px" />
                    <div className='capturedPreviewPic' onClick={() => enableCamera()}><img className='retake' src='/images/preview.png' /></div>
                    </div>
                  </div>}
                </div>
                <div className='playerName'>
                  <input id="playerfirstname" className='player font-face-gm  py-2' type='text' placeholder='Enter your first name ' required={true} />
                </div>
                <div className='saveBtn'>
                  <button onClick={save} className='font-face-gm savingBtn px-3 py-1'>Save</button>
                </div>
              </div>
            </div>
          </div> : ""}
        </div> */}
      </Router>
    </>
  );
}

export default App;
