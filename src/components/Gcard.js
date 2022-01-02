import React from "react";
import Mask from "../Images/Mask.png";
import "./Gcard.css";
import logo from "../Images/logo.png";
import lady from "../Images/lady.png";
import {Dropdown} from "react-bootstrap"
import Tabs from "./Tabs";
function Gcard() {
  return (
    <>
      <section className="Gcard-org">
      <div className="container img-con">
          <div className="img-card">
            <div className="top-img">
              {/* <img className="Mask-img" src={Mask} alt="" /> */}
             
       <div className="row">
           <div className="col-xl-4 col-md-4 col-12 ab-index">
           <div className="lady position-relative">
                  <img className="lady-img" src={lady} alt="" />
                  <div className="name-5">
                    <p className="Name text-light">Shaeng Belmonte</p>
                    <p className="edit ">Edit my profile</p>
                  </div>
                </div>
           </div>
           <div className="col-xl-3 col-md-4 col-12 ab-index cop">
           <div className="  class-logo position-relative">
           <div className="d-flex">
           <img className="logo-in" src={logo} />
                    <p className=" loyo">
                     StarStake
                    </p>
                    </div>
                  <span className="my text-light">My iNFT</span>
                  </div>
                 {/* tab view */}
                 <div className="mob">
             <h3 className="text-light ">4</h3>
             <p className="text-light">iNFTs Active</p>
             </div>
           </div>
           
           <div className="col-xl-5 col-md-4 col-12 ab-index center-deop">
           <div className="class-logo lolo-0 drop-down-0">
           <Dropdown>
  <Dropdown.Toggle className="bg-dp " id="dropdown-basic">
    All Time <i class='fas fa-angle-down ad'></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<div className=" drop-down-0">
  <button className="rupees">$130,000</button>
</div>
<div>
  <h2 className="position-relative text-light earning">Earnings</h2>
</div>
      <div className="d-flex values-0">
      <div className="screen">
             <h3 className="text-light four-cal">4</h3>
             <p className="text-light">iNFTs Active</p>
             </div>
        
             <div>
             <p className="text-light money">$130,000</p>
             <p className="earn">Earning From iNFTs</p>
           </div>
           </div>
          
                </div>
           </div>
       </div>
       </div>
       </div>
       <Tabs />
       </div>
      </section>
    </>
  );
}
export default Gcard;
