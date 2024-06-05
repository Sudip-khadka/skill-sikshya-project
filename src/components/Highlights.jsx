import React from 'react'

function Highlights() {
  return (
    <div className='highlights'>
      <span className="colored underlined">- FEATURE HIGHLIGHT</span>
      <h1><span className="colored underlined">Experience</span> the Difference</h1>
      <p>Discover a World of Female-Centric Products and Services</p>
      <div className="highlightcards">
        <div className="firstrow">
            <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-shield-shaded" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                </svg>
                <h2>Booking Appointments</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
            </div>
            <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5m6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                </svg>
                <h2>Ordering and Pre-ordering</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
            </div>
            <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <h2>Searching for Product</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
            </div>
        </div>
        <div className="secondrow">
            <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-funnel" viewBox="0 0 16 16">
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                </svg>
                <h2>Filtering products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
            </div>
            <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-truck" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
                <h2>Delivery Service</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
            </div>
            <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF785A" className="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>
                </svg>
                <h2>Payments</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque atque eveniet eaque rem laudantium magni soluta aliquid? </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
