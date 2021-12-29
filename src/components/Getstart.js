import React from "react";
import "../../node_modules/video-react/dist/video-react.css";
import "./Getstart.css";
import Coolicon from "../Images/coolicon.svg";
import Icon from "../Images/playic.svg";
import backIcon from "../Images/backIcon.svg";
// components
import VideoEle from "./VideoEle";
import MulCard from "./MulCard";
import micr from "../Images/Micr.png"


function Getstart() {
  return (
    <>
    
     <section className="count-pg">
      <div className="get-start">
        <div className="containe">
        <div className="d-flex spce">
         
            {" "}
            <img className="poback" alt="" src={backIcon} /> 
             <h2 className="text-light h2-font">Get Started with StarStake
          </h2>
</div>
          <p className="text-light details">
            A detailed training className on how to get startednusing StarStake.{" "}
          </p>
        </div>
        <div className="containe pt-5">
          <div className="row">
            <div className="col-xl-5 col-md-6 col-12">
              <div className="card bg-card1">
              <img className="position-absolute start-0 top-0 mirc-img" src={micr}/>
                <ul>
                  <li className="d-flex h-head li-pd">
                    <div>
                      <span className="uppr-time">
                        Welcome to Infinity NFTs
                      </span>
                    </div>

                    <div>
                      <span className="timmer">04:35</span>
                      <img  src={Icon} alt="" />
                    </div>
                  </li>

                  <li className="d-flex h-head li-pd">
                    <div>
                      <span className="uppr-time">How iNFTs Work</span>
                    </div>

                    <div>
                      <span className="timmer">04:35</span>
                      <img src={Icon} alt="" />
                    </div>
                  </li>
                  <li className="d-flex h-head li-pd colo-eff">
                    <div>
                      <span className="uppr-time">
                        What You Can Do with iNFTs
                      </span>
                    </div>

                    <div>
                      <span className="timmer">04:35</span>
                      <img src={Icon} alt="" />
                    </div>
                  </li>
                  <li className="d-flex h-head li-pd">
                    <div>
                      <span className="uppr-time">
                      Building your iNFT framework for Success
                      </span>
                    </div>

                    <div>
                      <span className="timmer">04:35</span>
                      <img src={Icon} alt="" />
                    </div>
                  </li>

                

                  <li className="d-flex h-head li-pd">
                    <div>
                      <span className="uppr-time">Access is the Key</span>
                    </div>

                    <div>
                      <span className="timmer">04:35</span>
                      <img src={Icon} alt="" />
                    </div>
                  </li>

                  <li className="d-flex h-head li-pd">
                    <div>
                      <span className="uppr-time">Time To get Minting</span>
                    </div>

                    <div>
                      <span className="timmer">04:35</span>
                      <img src={Icon} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-top0">
                <div className="card bg-card2">
                  <div className=" top-0 desc h-head d-flex ">
                    <p className="text-light pd-re">Resources</p>
                    <p className="text-light">download</p>
                  </div>
                  <div className="">
                    <ul>
                      <div className="ul-l">
                        <li className="d-flex h-head">
                          <div>
                            <span className="uppr-time">
                              iNFT Rapid Mint framework
                            </span>
                          </div>

                          <div>
                            <span className="timmer">2.1mb</span>
                            <img src={Coolicon} alt="" />
                          </div>
                        </li>
                      </div>
                      <div className="ul-ls">
                        <li className="d-flex h-head">
                          <div>
                            <span className="uppr-time">
                              iNFT Card Design Template
                            </span>
                          </div>

                          <div>
                            <span className="timmer">5.4mb</span>
                            <img src={Coolicon} alt="" />
                          </div>
                        </li>
                      </div>
                      <div className="ul-l">
                        <li className="d-flex h-head">
                          <div>
                            <span className="uppr-time">
                              Acces Token Card Template
                            </span>
                          </div>

                          <div>
                            <span className="timmer">3.1mb</span>
                            <img src={Coolicon} alt="" />
                          </div>
                        </li>
                      </div>
                      <div className="ul-ls">
                        <li className="d-flex h-head">
                          <div>
                            <span className="uppr-time">Starstake Images</span>
                          </div>

                          <div>
                            <span className="timmer">0.9mb</span>
                            <img src={Coolicon} alt="" />
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container"></div>
            </div>
            <div className="col-xl-7 col-md-6 col-12 poster-o">
            <VideoEle />
            </div>
          </div>
          {/* section 2 million Stone  */}
          <MulCard />
        </div>
        </div>
      </section>
    </>
  );
}
export default Getstart;
