import React from "react";
import Card from "./Card";

function DoneImg(props) {
    if(props.done){
        return <img src="./assets/checked.webp" alt="check"/>
    }

    else{
        return <img src="./assets/unchecked.webp" alt="uncheck"/>
    }
}


function ListItem(props) {
    
    return(
        
        <li>
        
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
            
            
                <div>
                    <button onClick={() => {props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={ () => props.onItemDeleted(props.item) }><img src="./assets/delete.webp" alt="delete"/></button>
                </div>
            </Card>
        
        </li>);
}

export default ListItem;