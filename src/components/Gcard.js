import React from "react";
import Mask from "../Images/Mask.png";
import "./Gcard.css";
import logo from "../Images/logo.png";
import lady from "../Images/lady.png";
import {Dropdown} from "react-bootstrap"
function Gcard() {
  return (
    <>
      <section className="Gcard-org">
      <div className="container">
          <div className="img-card">
            <div className="top-img">
              <img className="Mask-img" src={Mask} alt="" />
             
       <div className="row">
           <div className="col-3">
           <div className="lady position-relative">
                  <img className="lady-img" src={lady} alt="" />
                  <div className="name-5">
                    <p className="Name text-light">Shaeng Belmonte</p>
                    <p className="edit ">Edit my profile</p>
                  </div>
                </div>
           </div>
           <div className="col-4">
           <div className="  class-logo position-relative">
                 
                    <p className=" loyo">
                      <img src={logo} /> StarStake
                    </p>
                  <span className="my text-light">My iNFT</span>
                  </div>
            
           </div>
           
           <div className="col-5 center-deop">
           <div className="class-logo drop-down-0">
           <Dropdown>
  <Dropdown.Toggle className="bg-dp" id="dropdown-basic">
    All Time
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<div className="rupees position-relative drop-down-0">
  <span>$130,000</span>
</div>
<div>
  <h2 className="position-relative text-light earning">Earning</h2>
</div>
      <div className="position-relative values-0">
             <h3 className="text-light four-cal">4</h3>
             <p className="text-light">iNFTs Active</p>

           </div>
           <div>
             <p>$130,000</p>
           </div>
                </div>
           </div>
       </div>
       </div>
       </div>
       </div>
      </section>
    </>
  );
}
export default Gcard;
