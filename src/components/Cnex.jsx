import React from 'react'
import Highlights from './Highlights'

function Cnex() {
  return (
    <div className='cnex'>
      <h1>Why <span className="colored underlined">Cnex ?</span></h1>
      <div className="cards">
        <div className="card">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
</svg>
            <h2>Fast</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
        </div>
        <div className="card">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg>
         <h2>Easy</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
        </div>
        <div className="card">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-coin" viewBox="0 0 16 16">
  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
</svg>
            <h2>Affordable</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
        </div>
        <div className="card">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
            <h2>Legal Support</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
        </div>
      </div>
      <Highlights/>
    </div>
  )
}

export default Cnex
