import React from "react";
import {Nav,Navbar} from "react-bootstrap"
import './Navbar.css';
import { BrowserRouter as Router,Switch,Route,Link, Routes} from "react-router-dom";
import wallet from "../Images/wallet-icon-A.svg";
import cartIcon from "../Images/CartIcon.svg";
import donload from "../Images/download.png";
import logo from "../Images/logo.png";
import Branch from "./Branch"
import Getstart from "./Getstart";
function Navba() {
  return (
   <Router>
   <>

<Navbar collapseOnSelect expand="lg" bg="" variant="dark" fixed="top">
  <div className="container-fluid card-mr">
  <Navbar.Brand href="#home" className="top-logo"><img className="mr-logo" src={logo}/> StarStake</Navbar.Brand>
 <div className="icon-for">
 <button className="btn text-light  nav_bell" type="button">
                    <i className="fas fa-bell ">
                      <span className="bell_0 text-light"> 10</span>
                    </i>
                  </button>
 <img className="img-wallet mar-01" className="wakk" alt="" src={wallet} />
                    <img className="img-cart mar-01" alt="" src={cartIcon} />
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 </div>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto mb-2 mb-lg-0">
      <Nav.Link as={Link} to={"/Getstart"} className="text-light market-1 links-Nav_Y2Y">Marketplace</Nav.Link>
      <Nav.Link as={Link} to={"/Branch"}  className=" text-light links-Nav_Y2Y">How it works</Nav.Link>
      <Nav.Link  className="text-light links-Nav_Y2Y">Be a Star</Nav.Link>
      <Nav.Link href="#pricing" className=" text-light links-Nav_Y2Y">Resorces</Nav.Link>
      <div className="mobile-btn">
      <button type="button" className="btn btn-connect-wallet">
                    <span className="btn-wallet"><strong className="font-for">Stake</strong></span>
                  </button>
                  </div>
                  <div className="mobile-btn">
                  <button
                    type="button"
                    id="btn-57-nav"
                    className="mt-57 btn   bg-colr text-light"
                  >
                    <span className="btn-waal"><strong className="text-light font-for">$10,000 NFTB</strong></span>
                  </button>
                  </div>
                  <div className="mobile-btn">
                  <button
                    type="button"
                    id="btn-57-nav"
                    className="mt-57 btn  btn-connect-wallet btn-ox"
                  >
                    <span className="btn-wallet"><strong className="font-for">0xBBB6...E96e </strong><img className="mar-bot" src={donload} alt=""/></span>
                  </button>
                  </div>
                  <div className="mobile-btn ">
                  <button className="btn text-light  nav_bell btn-for-0" type="button">
                    <i className="fas fa-bell ">
                      <span className="bell_0 text-light btn-for-0"> 10</span>
                    </i>
                  </button>
                    <img className="img-wallet mar-01 " className="wakk btn-for-0" alt="" src={wallet} />
                    <img className="img-cart mar-01 btn-for-0 " alt="" src={cartIcon} />
                    {/* <span className="tooltiptext">hover over me</span> */}
       

                  </div>
                  <span >
                   
                  </span>
                 
    </Nav>
    
  </Navbar.Collapse>
  </div>
</Navbar>
   </>
   <div>
     <Switch>
     
        
         <Route path="/Branch">
            <Branch />
         </Route>
         <Route path="/">
            <Getstart />
         </Route>
         {/* <Route path="/Tabs">
            <Tabs />
         </Route> */}
     </Switch>
   </div>
   </Router>
  );
}

export default Navba;