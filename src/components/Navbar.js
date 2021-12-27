import React from "react";
import {Nav,NavDropdown,Navbar,Container} from "react-bootstrap"
import './Navbar.css';
import wallet from "../Images/wallet-icon-A.svg";
import cartIcon from "../Images/CartIcon.svg";
function Navba() {
  return (
   <>
<Navbar collapseOnSelect expand="lg" bg="" variant="dark">
  <div className="container-fluid card-mr">
  <Navbar.Brand href="#home" className="top-logo">StarStake</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto mb-2 mb-lg-0">
      <Nav.Link href="#features" className="text-light market-1 links-Nav_Y2Y">Marketplace</Nav.Link>
      <Nav.Link href="#pricing" className=" text-light links-Nav_Y2Y">How it works</Nav.Link>
      <Nav.Link href="#features" className="text-light links-Nav_Y2Y">Be a Star</Nav.Link>
      <Nav.Link href="#pricing" className=" text-light links-Nav_Y2Y">Resorces</Nav.Link>
      <button type="button" class="btn btn-connect-wallet">
                    <span className="btn-wallet"><strong>Stake</strong></span>
                  </button>
                  <button
                    type="button"
                    id="btn-57-nav"
                    class="mt-57 btn   bg-colr text-light"
                  >
                    <span className="btn-waal"><strong className="text-light">$10,000 NFTB</strong></span>
                  </button>
                  <button
                    type="button"
                    id="btn-57-nav"
                    class="mt-57 btn  btn-connect-wallet btn-ox"
                  >
                    <span className="btn-wallet"><strong>0xBBB6...E96e</strong></span>
                  </button>
                  <button class="btn text-light  nav_bell" type="button">
                    <i class="fas fa-bell ">
                      <span className="bell_0 text-light"> 10</span>
                    </i>
                  </button>
                  <span class="img-wallet mar-01">
                    <img className="wakk" src={wallet} />
                   
                  </span>
                  <span class="img-cart mar-01 mar-tp">
                    <img src={cartIcon} />
                  </span>
    </Nav>
    
  </Navbar.Collapse>
  </div>
</Navbar>
   </>
  );
}

export default Navba;