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
                <div className="d-flex h-head">
                  <p className="text-light">Welcome to Infinity NFTs</p>

                  <p className="term text-light">
                    04:35 <img src={Icon} alt="" />
                  </p>
                </div>
                <div className="d-flex h-head">
                  <p className="text-light">How iNFTs Work</p>

                  <p className="term text-light">
                    04:35 <img src={Icon} alt="" />
                  </p>
                </div>
                <div className="d-flex h-head">
                  <p className="text-light">What You Can Do with iNFTs</p>

                  <p className="term text-light">
                    04:35 <img src={Icon} alt="" />
                  </p>
                </div>
                <div className="d-flex h-head">
                  <p className="text-light">
                    Building Your iNFTs Framework for success
                  </p>

                  <p className="term text-light">
                    04:35 <img src={Icon} alt="" />
                  </p>
                </div>
                <div className="d-flex h-head">
                  <p className="text-light">Access is the Key</p>

                  <p className="term text-light">
                    04:35 <img src={Icon} alt="" />
                  </p>
                </div>
                <div className="d-flex h-head">
                  <p className="text-light">Time To Get Minting</p>

                  <p className="term text-light">
                    04:35 <img src={Icon} alt="" />
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <div className="card bg-card2">
                  <div className="bg-dark top-0 desc h-head d-flex ">
                    <p className="text-light">Resources</p>
                    <p className="text-light">download</p>
                  </div>
                  <div className="">
                    <div className="d-flex h-head ">
                      <p className="text-light wel-to">
                        Welcome to Infinity NFTs
                      </p>

                      <p className="term text-light wel-to">
                        04:35 <img src={Coolicon} alt="" />
                      </p>
                    </div>
                    <div className="d-flex h-head bg-dark">
                      <p className="text-light wel-to">How iNFTs Work</p>

                      <p className="term text-light wel-to">
                        04:35 <img src={Coolicon} alt="" />
                      </p>
                    </div>
                    <div className="d-flex h-head">
                      <p className="text-light wel-to">
                        What You Can Do with iNFTs
                      </p>

                      <p className="term text-light wel-to">
                        04:35 <img src={Coolicon} alt="" />
                      </p>
                    </div>
                    <div className="d-flex h-head bg-dark ls-0">
                      <p className="text-light wel-to">
                        What You Can Do with iNFTs
                      </p>

                      <p className="term text-light wel-to">
                        04:35 <img src={Coolicon} alt="" />
                      </p>
                    </div>
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
                <div className="card bg-dark choose-cls">
                  <div className="d-flex h-head choose1">
                    <p className="text-light">
                      <img src={Shapevide} alt="" className="pl-2" /> Choose the
                      right iNFTs
                    </p>
                    <div class="new">
                      <form>
                        <div class="form-group ">
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
                <img src={Shapelight} alt="" /> Secret: Choosing the right iNFTs
                isn't always about royalties, attention to the value of your
                <p className="text-light access-to">accesss tokens.</p>
              </p>
              <div className="card bg-card4">
                <div className="bg-dark top-0 desc">
                  <p className="text-light">Description & Links</p>
                </div>
                <div>
                  <div className="Also-cls">
                    <p className="text-light">
                      Here's the hub mentioned in the video.
                      <a href="#">Click here.</a>
                    </p>
                    <p className="text-light">
                      Also checkout the other trainings to know the framework{" "}
                      <br className="m-gapp" /> better.
                      <a href="#">www.starstake.com/?/ASKF824eSDFNJH4JNFSNF</a>
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
                  <div className="card bg-dark star-01">
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
                  <div className="card bg-dark star-01">
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
                  <div className="card bg-dark star-01">
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
                  <div className="card bg-dark star-01">
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
                  <div className="card bg-dark star-01">
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
                  <div className="card bg-dark star-01">
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
                  <div className="card bg-dark star-01">
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
                  <img className="micro" src={Microsoft} alt="" />
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
