import React from "react"
function Item(props){
    let image="images/"+props.name+".jpg";
  return (
        <div className="item">
            <h1>{props.name}</h1>
            <img src={image} alt="Italian Trulli"></img>
            <h3>{props.price}</h3>
            
        </div>

    );
}
export default Item;
