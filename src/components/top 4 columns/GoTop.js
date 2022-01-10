import React from 'react'

function GoTop() {
    return (

        <div id="link-go-home" className="five ">
            <a onClick={()=>window.scrollTo(0,0)} className="underline">
    
              Go  <img  src="https://image.flaticon.com/icons/png/512/753/753227.png" alt="top"></img>  
            </a>
            
          </div>
    )
}
export default GoTop






