import React, { useEffect, useRef } from 'react'
import './home-page.css'
// import Firstani from 'Firstani.json'
import Lottie from 'lottie-web'
function HomePage() {

    // const rightContainer = useRef (null)
    // useEffect (() =>{
    //     Lottie.loadAnimation({
    //         container: rightContainer,
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         path: './First.json'
    //     })
    // },[])
  return (
    <>
        <div className="first-home">
            <div className="left-container">
                <p className='unlock'>Unlock the Potential of Web 3.0's with KodeinKGP
                </p>
            </div>
        </div>
    </>
  )
}

export default HomePage
