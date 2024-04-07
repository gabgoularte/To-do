import React from "react";
import Card from "./Card";

function Modal(props) {

    function onHideModal(event) {
        let target = event.target;
        
        if(target.id === "modal"){
            props.onHideModal(false);
        }
    }
    

    return (<div id="modal" onClick={onHideModal} className={ props.show ? "modal" : "modal hide" }>
        <Card className="cardModal">
            {props.children}
        </Card>
    </div>)
}

export default Modal;