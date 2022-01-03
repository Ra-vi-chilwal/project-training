import React ,{useState} from "react";
import "./Branch.css";
import Gcard from "./Gcard";
import logo from "../Images/logo.png";
import GettingStarted from "../Images/GettingStarted.svg";
import Trainingicon from "../Images/Trainingicon.svg";
import starprofileicon from "../Images/starprofileicon.svg";
import createhub from "../Images/createhub.svg";
import iNFTicon from "../Images/iNFTicon.svg";
import accesstoken from "../Images/accesstokensicon.svg";
import NFTbucksicon from "../Images/NFTbucksicon.svg";
import Supporticon from "../Images/Supporticon.svg";
import "./Modal/Modal.css"
function Branch(){
  const [mobile , setMobile] = useState(false)
    return(
        <>
          <section className="branch-co">
              <div className="Container-wrap">
              <div className="row g-0">
                  <div className="col-xl-2 col-1 Branch-0 ">
                     <ul className="d-flex active pd-hub">
                         <img className="" src={createhub}/><li className="activ">CreatorHub</li>
                     </ul>
                     <ul className="pd-hub">
                     <div className="">
                         <li className="h-li h-hd">
                         CREATE ZONE
                         </li>
                         </div>
                         <div className="d-flex">
                         <img className="li-hv" src={starprofileicon} alt=""/><li className="li-hv">Star Profile</li></div>
                         <div className="d-flex"><img src={iNFTicon} alt="" className="li-hv"/><li  className="li-hv ">iNFT</li></div>
                         <div className="d-flex"><img src={NFTbucksicon} alt="" className="li-hv"/><li  className="li-hv">NFTBuckes</li></div>
                         <div className="d-flex"><img src={accesstoken} alt="" className="li-hv"/><li  className="li-hv">Access Token</li></div>
                         
                     </ul>
                     <ul className="pd-hub">
                     <div className="d-flex">
                       <li  className="head-li">TRAINING CENTER</li></div>
                       <div className="d-flex"><img src={GettingStarted} alt=""/><li  className="li-hv">Getting Started</li></div>
                       <div className="d-flex"><img src={Trainingicon} alt=''/><li  className="li-hv">Training</li></div>

                     </ul>
                     <ul className="pd-hub">
                       <li className="head-li">SUPPORT</li>
                       <div className="d-flex li-hv"><img src={Supporticon} alt="" /><li  className="li-hv">Support</li></div>
                       

                     </ul>
                 </div> 
              
              <div className="col-xl-10 col-11">
             <Gcard />
              </div>
             </div>
             </div>
          </section>

        </>
    )
}
export default Branch;