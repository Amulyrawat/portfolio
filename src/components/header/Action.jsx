import React from "react";
import CV from '../../assets/Amulya_Rawat_CV.pdf'

const Action = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn"> Download CV</a>
      <a href="#contact" className="btn btn-primary"> Let's Talk</a>
    </div>
  )
}

export default Action
