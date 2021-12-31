import react, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
function Tabs() {
  const data = [
    { language: "React", id: 1 },
    { language: "javv", id: 2 },
    { language: "Vue", id: 3 },
    { language: "Node", id: 4 },
    { language: "other", id: 5 },
  ];
  const [options] = useState(data);
  return (
    <>
      <div className="tabs-yp">
        <nav class="nav">
          <button className="btn-col">
            <a className="nav-link act " aria-current="page" href="#">
              Dashboard
            </a>
          </button>
          <button className="btn-col second-btn">
            <a className="nav-link act " aria-current="page" href="#">
              My iNFTs
            </a>
          </button>
          <button className="btn-col second-btn">
            <a className="nav-link act " aria-current="page" href="#">
              iNFTs in progress
            </a>
          </button>
        </nav>
      </div>
      <div className="d-flex prop-ty">
        <p className="my-prop">My iNFTs</p>
        <div>
          <button className="btn-col">
            <a className="nav-link act " aria-current="page" href="#">
              Dashboard
            </a>
          </button>
          <button className="btn-col second-btn">
            <a className="nav-link act " aria-current="page" href="#">
              My iNFTs
            </a>
          </button>
        </div>

     
      </div>
      <div  className="mul-top">
        <div className="multi-sel">
          
          <Multiselect options={options} displayValue="language" />
        </div>
      </div>
     
    </>
  );
}
export default Tabs;
