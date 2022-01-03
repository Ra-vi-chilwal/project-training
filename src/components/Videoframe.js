import React ,{useState} from "react";

import "./Videoframe.css";

export default function Model(){
    const [modal,setModal] = useState(false);
    const toggleModal = () =>{
        setModal(modal)
    }
    return(
        <>
            <button onClick={toggleModal} className="btn-modal">
Open
            </button>
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <h2 className="text-light">Hello Modal</h2>
                    <p>hi welcdsofddfsfs</p>
                </div>
            </div>
             </div>
        </>
    )
}