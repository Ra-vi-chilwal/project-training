import React,{useState} from "react";
import Tabs from "./Tabs";
import "./Navtab.css";
function Navtab(){
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return(
        <>
 <div className="tabs-yp">
        <nav class="nav">
          <button className="btn-col2">
            <a className="nav-link act " aria-current="page" className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)} >
              Dashboard
            </a>
          </button>
          <button className="btn-col2 second-btn">
            <a className="nav-link act " aria-current="page"  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)} >
              My iNFTs
            </a>
          </button>
          <button className="btn-col2 second-btn">
            <a className="nav-link act " aria-current="page"  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)} >
              iNFTs in progress
            </a>
          </button>
        </nav>
      </div>
      <div className="con">
     

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Tabs />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         
        </div>
      </div>
    </div>
        </>
    )
}
export default Navtab;