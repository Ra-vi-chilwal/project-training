import react, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { Dropdown } from "react-bootstrap";
import logo from "../Images/logo.png";
import c1 from "../Images/c1.png";
import Modal from "../components/Modal/Modal"
function Tabs() {
  const data = [
    { language: "React", id: 1 },
    { language: "java", id: 2 },
    { language: "Vue", id: 3 },
    { language: "Node", id: 4 },
    { language: "other", id: 5 },
  ];
  const [options] = useState(data);
  return (
    <>
   
      <div className="d-flex prop-ty">
        <p className="my-prop">My iNFTs</p>
        <div>
        
          <button className="btn-col-3">
            <a className="nav-link act " aria-current="page" href="#">
              iNFT Tutorial <i class="fas fa-play"></i>
            </a>
          </button>
          <button className="btn-col-2 second-btn">
            <a className="nav-link act " aria-current="page" href="#">
              Mint New iNFT
            </a>
          </button>
        </div>
      </div>
      <div className="mul-top d-flex">
        <div className="multi-sel">
          <Multiselect options={options} displayValue="language" />
        </div>
        <Dropdown>
          <Dropdown.Toggle className="bg-second" id="dropdown-basic">
            Type<i class='fas fa-angle-down ads'></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
          <div className="container-wrap">
      <div className="row pt-4">
        <div className="col-xl-4 col-md-6 col-12  p-3">
            <div className="card c-card">
              <img className="img-cd" src={c1} alt="" />
              <div className="position-absolute start-car d-flex">
                <img className="img-p0" src={logo} alt />
                <span className="star-m"> Starstake | music</span>
              </div>
              <div className="card-body">
                <p className="text-light pt-3">
                  Gigil-Single by Seng <br className="m-op" /> Belmonte
                </p>
                <p className="pesa">$4,152.32 staking</p>
                <div className="d-flex justi">
                  <a href="" className="atag-0">
                    Details
                  </a>
                  <a href="" className="atag-0">
                    Edit
                  </a>
                  <a href="" className="atag-0 right">
                    View page
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 p-3">
            <div className="card c-card">
              <img className="img-cd" src={c1} alt="" />
              <div className="position-absolute start-car d-flex">
                <img className="img-p0" src={logo} alt />
                <span className="star-m"> Starstake | music</span>
              </div>
              <div className="card-body">
                <p className="text-light pt-3">
                  Gigil-Single by Seng <br className="m-op" /> Belmonte
                </p>
                <p className="pesa">$4,152.32 staking</p>
                <div className="d-flex justi">
                  <a href="" className="atag-0">
                    Details
                  </a>
                  <a href="" className="atag-0">
                    Edit
                  </a>
                  <a href="" className="atag-0 right">
                    View page
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12   p-3">
            <div className="card c-card">
              <img className="img-cd" src={c1} alt="" />
              <div className="position-absolute start-car d-flex">
                <img className="img-p0" src={logo} alt />
                <span className="star-m"> Starstake | music</span>
              </div>
              <div className="card-body">
                <p className="text-light pt-3">
                  {" "}
                  Gigil-Single by Seng <br className="m-op" /> Belmonte
                </p>
                <p className="pesa">$4,152.32 staking</p>
                <div className="d-flex justi">
                  <a href="" className="atag-0 ">
                    Details
                  </a>
                  <a href="" className="atag-0 ">
                    Edit
                  </a>
                  <a href="" className="atag-0 right">
                    View page
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12  p-3">
            <div className="card c-card">
              <img className="img-cd" src={c1} alt="" />
              <div className="position-absolute start-car d-flex">
                <img className="img-p0" src={logo} alt />
                <span className="star-m"> Starstake | music</span>
              </div>
              <div className="card-body">
                <p className="text-light pt-3">
                  Gigil-Single by Seng <br className="m-op" /> Belmonte
                </p>
                <p className="pesa">$4,152.32 staking</p>
                <div className="d-flex justi">
                  <a href="" className="atag-0">
                    Details
                  </a>
                  <a href="" className="atag-0">
                    Edit
                  </a>
                  <a href="" className="atag-0 right">
                    View page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}
export default Tabs;
