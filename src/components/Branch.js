import React ,{useState} from "react";
import "./Branch.css";
import Gcard from "./Gcard";
import logo from "../Images/logo.png";
import shapevide from "../Images/Shapevide.svg";
import Shapelight from "../Images/Shapelight.svg";
function Branch(){
  const [mobile , setMobile] = useState(false)
    return(
        <>
          <section className="branch-co">
              <div className="Container-wrap">
              <div className="row g-0">
                  <div className="col-xl-2 col-1 Branch-0 ">
                     <ul>
                         <li className="active">CreatorHub</li>
                     </ul>
                     <ul >
                     <div className="d-flex">
                         <img className= "mob-zone" src={Shapelight}/><li className="h-li">
                         CREATE ZONE
                         </li>
                         </div>
                         <li className="li-hv">Star Profile</li>
                         <li  className="li-hv">iNFT</li>
                         <li  className="li-hv">NFTBuckes</li>
                         <li  className="li-hv">Access Token</li>
                     </ul>
                     <ul>
                     <div className="d-flex"><img className= "mob-zone" src={shapevide}/>
                       <li  className="head-li">TRAINING CENTER</li></div>
                       <li  className="li-hv">Getting Started</li>
                       <li  className="li-hv">Training</li>

                     </ul>
                     <ul>
                       <li className="head-li">SUPPORT</li>
                       <li  className="li-hv">Support</li>
                       

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