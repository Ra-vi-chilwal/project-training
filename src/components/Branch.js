import React from "react";
import "./Branch.css";
import Gcard from "./Gcard";
import logo from "../Images/logo.png";
function Branch(){
    return(
        <>
          <section className="branch-co">
              <div className="Container">
              <div className="row g-0">
                  <div className="col-2 Branch-0 ">
                     <ul>
                         <li className="active">CreatorHub</li>
                     </ul>
                     <ul>
                         <li className="h-li">
                         CREATE ZONE
                         </li>
                         <li className="li-hv">Star Profile</li>
                         <li  className="li-hv">iNFT</li>
                         <li  className="li-hv">NFTBuckes</li>
                         <li  className="li-hv">Access Token</li>
                     </ul>
                     <ul>
                       <li  className="head-li">TRAINING CENTER</li>
                       <li  className="li-hv">Getting Started</li>
                       <li  className="li-hv">Training</li>

                     </ul>
                     <ul>
                       <li className="head-li">SUPPORT</li>
                       <li  className="li-hv">Support</li>
                       

                     </ul>
                 </div> 
              
              <div className="col-10">
             <Gcard />
              </div>
             </div>
             </div>
          </section>

        </>
    )
}
export default Branch;