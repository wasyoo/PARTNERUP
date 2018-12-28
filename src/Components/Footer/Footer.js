import React from 'react'
import './footer.css'

export default function Footer() {
  return (
      <div className="foot">
    <footer className="container-fluid bg-grey py-5">
<div className="container">
   <div className="row">
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 ">
               <div className="logo-part">
               
           <div className="footer-logo"><h3>PARTNER UP</h3>  <img src="https://i.ibb.co/QJwr2VT/logo.png" className="w-50 logo-footer" /></div>
                  <p>Partner Up la platefome pour scaler</p>
                  <p>Trouvez votre partenaire en deux clicks </p>
               </div>
            </div>
            <div className="col-md-6 px-4">
               <h6>A propos</h6>
               <a href="#" className="btn-footer"> More Info </a><br/>
               <a href="#" className="btn-footer"> Contact Us</a>
            </div>
         </div>
      </div>
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 px-4">
               <div className="row ">
                  <div className="col-md-6">
                     <ul>
                        <li> <a href="/"> Home</a> </li>
                        <li> <a href="#"> About</a> </li>
                        <li> <a href="#"> Service</a> </li>
                        <li> <a href="/contact"> Contact</a> </li>
                     </ul>
                  </div>
                  <div className="col-md-6 px-4">
                     
                  </div>
               </div>
            </div>
            <div className="col-md-6 ">
               <h6> Newsletter</h6>
               <div className="social">
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
               </div>
               <form className="form-footer my-3">
                  <input type="text"  placeholder="search here...." name="search"/>
                  <input type="button" value="Go" />
               </form>
            </div>
         </div>
      </div>
   </div>
</div>

</footer>
</div>

  )
}
