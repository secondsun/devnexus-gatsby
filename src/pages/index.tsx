import * as React from "react"
import '../style/main.scss'
import {MDCRipple} from '@material/ripple';

// markup
const IndexPage = () => {
  
  var buttonRef = React.useRef(null)
  React.useEffect(function (){
    const buttonRipple = new MDCRipple(buttonRef.current as unknown as Element);  
    
  })
  //
  return (
    <main className="material-theme">
      <div>
      <div className="mdc-touch-target-wrapper">
        <button className="mdc-button button  mdc-button--outlined" ref={buttonRef}>
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__touch"></span>
          <span className="mdc-button__label">My Accessible Button</span>
        </button>
      </div>
      
      </div>
    </main>
  )
}

export default IndexPage
