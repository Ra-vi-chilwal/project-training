import React from "react";
import vista from "../Images/vista.png";
import Shapevide from "../Images/Shapevide.svg";
import Shapelight from "../Images/Shapelight.svg";
import { Player } from "video-react";
function VideoEle(){
    return(
        <>
        
<div className="card vista-card">
                
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
                    <span className="text-light rightinf">
                      <img src={Shapevide} alt="" className="pl-2 shapevb" />{" "}
                      &nbsp; Choose The right iNFTs
                    </span>
                    <div className="new">
                      <form>
                        <div className="form-group mar-ilm">
                          <input type="checkbox" id="html" />
                          <label className="text-light" htmlFor="html">
                            Complete
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
              <img className="Shape-light00" src={Shapelight} alt="" />
              <p className="pt-3 text-light serect-choice">
                 Secret: Choosing the right iNFTs isn't always about royalties, attention to the value
                of your accesss tokens.
              </p>
              </div>
              <div className="card bg-card4">
                <div className=" top-0 desc">
                  <p>
                    <strong className="text-light desc-01">
                      Description & Links
                    </strong>
                  </p>
                </div>
                <div>
                  <div className="Also-cls">
                    <p className="text-light weight01">
                      Here's the hub mentioned in the video.
                      <a className="atag" href="_blank">
                        Click here.
                      </a>
                    </p>
                    <p className="text-light weight01">
                      Also checkout the other trainings to know the framework{" "}
                      better. <br className="m-gapp" />
                      <a className="atag" href="_blank">
                        www.starstake.com/?/ASKF824eSDFNJH4JNFSNF
                      </a>
       
                    </p>
                  </div>
                </div>
       
              </div>
    
        </>
    )
}
export default VideoEle;