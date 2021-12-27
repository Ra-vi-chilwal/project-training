import React from "react";
import "../../node_modules/video-react/dist/video-react.css";
import "./Getstart.css";
import Microsoft from "../Images/Microsoft.png";
import Coolicon from "../Images/coolicon.svg";
import Icon from "../Images/playic.svg";
import vista from "../Images/vista.png";
import Shapevide from "../Images/Shapevide.svg";
import Shapelight from "../Images/Shapelight.svg";
import backIcon from "../Images/backIcon.svg";
import images34 from "../Images/images34.png";
import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.css";
import ReactPlayer from "react-player";
function Getstart() {
  return (
    <>
      <section className="get-start">
        <div className="containe">
          <h2 className="text-light">
            {" "}
            <img className="poback" src={backIcon} /> Get Started with StarStake
          </h2>

          <p className="text-light details">
            A detailed training class on how to get startednusing StarStake.{" "}
          </p>
        </div>
        <div className="containe pt-5">
          <div className="row">
            <div className="col-xl-5 col-md-6 col-12">
              <div className="card bg-card1">
              <ul>
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">Welcome to Infinity NFTs</span>
                  </div>
                
                <div>
                  <span className="timmer">04:35</span>
                  <img src={Icon}/>
                </div>
                </li>
              </ul>
              <ul>
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">How iNFTs Work</span>
                  </div>
                
                <div>
                  <span className="timmer">04:35</span>
                  <img src={Icon}/>
                </div>
                </li>
              </ul>
              <ul>
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">What You Can Do with iNFTs</span>
                  </div>
                
                <div>
                  <span className="timmer">04:35</span>
                  <img src={Icon}/>
                </div>
                </li>
              </ul>
              <ul>
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">Building your iNFT framework for Success</span>
                  </div>
                
                <div>
                  <span className="timmer">04:35</span>
                  <img src={Icon}/>
                </div>
                </li>
              </ul>
              <ul>
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">Access is the Key</span>
                  </div>
                
                <div>
                  <span className="timmer">04:35</span>
                  <img src={Icon}/>
                </div>
                </li>
              </ul>
              <ul>
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">Time To get Minting</span>
                  </div>
                
                <div>
                  <span className="timmer">04:35</span>
                  <img src={Icon}/>
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
                  <ul className="ul-l">
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">iNFT Rapid Mint framework</span>
                  </div>
                
                <div>
                  <span className="timmer">2.1mb</span>
                  <img src={Coolicon}/>
                </div>
                </li>
              </ul>
              <ul className="ul-ls">
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">iNFT Card Design Template</span>
                  </div>
                
                <div>
                  <span className="timmer">5.4mb</span>
                  <img src={Coolicon}/>
                </div>
                </li>
              </ul>
              <ul className="ul-l">
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">Acces Token Card Template</span>
                  </div>
                
                <div>
                  <span className="timmer">3.1mb</span>
                  <img src={Coolicon}/>
                </div>
                </li>
              </ul>
              <ul className="ul-ls">
                <li className="d-flex h-head">
                  <div>
                    <span className="uppr-time">Starstake Images</span>
                  </div>
                
                <div>
                  <span className="timmer">0.9mb</span>
                  <img src={Coolicon}/>
                </div>
                </li>
              </ul>
                  </div>
                </div>
              </div>
              <div className="container"></div>
            </div>
            <div className="col-xl-7 col-md-6 col-12 poster-o">
              <div className="card vista-card">
                {/* <img className="position-absolute abc" src={} alt=""/> */}
                {/* <img src={vista} alt="" /> */}
                <div className="">
                  <Player
                    playsInline
                    poster={vista}
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  />
                </div>
              </div>
              <div className="pt-3">
                <div className="card  choose-cls ">
                  <div className="d-flex h-head choose1 cls-c0">
                    <p className="text-light rightinf">
                      <img src={Shapevide} alt="" className="pl-2 shapevb" /> &nbsp; Choose The
                      right iNFTs
                    </p>
                    <div class="new">
                      <form>
                        <div class="form-group mar-ilm">
                          <input type="checkbox" id="html" />
                          <label className="text-light" for="html">
                            Complete
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <p className="pt-3 text-light serect-choice">
                <img src={Shapelight} alt="" /> &nbsp; Secret: Choosing the right iNFTs
                isn't always about royalties, attention to the value of 
                <p className="text-light access-to">your accesss tokens.</p>
              </p>
              <div className="card bg-card4">
                <div className=" top-0 desc">
                  <p ><strong className="text-light desc-01">Description & Links</strong></p>
                </div>
                <div>
                  <div className="Also-cls">
                    <p className="text-light weight01">
                      Here's the hub mentioned in the video.
                      <a className="atag" href="#">Click here.</a>
                    </p>
                    <p className="text-light weight01">
                      Also checkout the other trainings to know the framework{" "}
                      better. <br className="m-gapp" />
                      <a className="atag" href="#">www.starstake.com/?/ASKF824eSDFNJH4JNFSNF</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section 2 million Stone  */}
          <div className="sec-2">
            <h2 className="text-light">StarStake Geeting Started Millstone</h2>
            <div className="pt-3">
              <div className="row">
                <div className="col-xl-2 col-6 micro-low">
                  <div className="card  star-01">
                    <div className="boot-cls">
                      <div className="d-flex boot">
                        <p className="card01">01</p>
                        <input
                          class="form-check-input box-2"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <p className="what text-light">What's iNFTs</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-6 micro-low">
                  <div className="card bgo-star ">
                    <div className="boot-cls">
                      <div className="d-flex boot">
                        <p className="card01">02</p>
                        <input
                          class="form-check-input box-01"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <p className="what text-light">What's iNFTs</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-6 micro-low">
                  <div className="card bgo-star ">
                    <div className="boot-cls">
                      <div className="d-flex boot">
                        <p className="card01">03</p>
                        <input
                          class="form-check-input box-01"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <p className="what text-light">What's iNFTs</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-6 micro-low">
                  <div className="card bgo-star ">
                    <div className="boot-cls">
                      <div className="d-flex boot">
                        <p className="card01">04</p>
                        <input
                          class="form-check-input box-01"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <p className="what text-light">What's iNFTs</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-6 micro-low">
                  <div className="card bgo-star ">
                    <div className="boot-cls">
                      <div className="d-flex boot">
                        <p className="card01">05</p>
                        <input
                          class="form-check-input box-01"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <p className="what text-light">What's iNFTs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row how0it">
              <div className="col-xl-2 col-6 micro-low">
                  <div className="card bgo-star ">
                    <div className="boot-cls">
                      <div className="d-flex boot">
                        <p className="card01">06</p>
                        <input
                          class="form-check-input box-01"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <p className="what text-light">Mint Your Access Token</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-6 micro-low">
                  <div className="card bgo-star ">
                    <div className="boot-cls">
                      <div className="d-flex boot">
                        <p className="card01">07</p>
                        <input
                          class="form-check-input box-01"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <p className="what text-light">Mint Your Access Token</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-6 micro-low">
                  <div className="card bgo-star ">
                    <div className="boot-cls">
                      <div className="d-flex boot">
                        <p className="card01">08</p>
                        <input
                          class="form-check-input box-01"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <p className="what text-light">Mint Your Access Token</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-12 micro-top">
                <div className="position-relative" >
                <div className="position-absolute star-pu">
                <span className=" stardex">STARDEX AWAITS!<br/></span><span className="comyou">Complete Your Starstake Milestones <br/>and get a piece of <a className="ata" href="#">STARDEX</a>.</span></div>
                {/* <p className="">Complete your StarStake Millstones<br/>and get a piece of <a href="#"> STARDEXTM</a>
                </p> */}
                  <img className="micro " src={Microsoft} alt="" />
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
export default Getstart;
