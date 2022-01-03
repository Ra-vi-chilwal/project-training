import React, { useState } from "react";
import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";
export default function Modal() {
  const [isOpen, setOpen] = useState(false);
  return (
     
    <React.Fragment>
    <div className="position-absolute  justify-content-center  end-0 d-flex u-video ">
      <ModalVideo
        channel="youtube"
        autoplay
        allowFullScreen
        isOpen={isOpen}
        videoId="sSZNLAIL65M"
        onClose={() => setOpen(false)}
      />
      </div>
      {/* <button className="btn-primary" onClick={() => setOpen(true)}>
        open
      </button> */}
      <button className="btn-col-3">
            <span className="nav-link act " aria-current="page" onClick={() => setOpen(true)}>
              iNFT Tutorial <i class="fas fa-play"></i>
            </span>
          </button>
    </React.Fragment>
  );
}