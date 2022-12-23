import React from "react"
function Item(props){
  return (
        <div className="item">
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
            
        </div>

    );
}
export default Item;
