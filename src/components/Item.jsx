import React from "react"
function Item(props){
    let image="images/"+props.name+".jpg";
    let altText=props.name+"image";
  return (
        <div className="item">
            <h2>{props.name}</h2>
            <img src={image} alt={altText}></img>
            <h5>{props.price}</h5>
            
        </div>

    );
}
export default Item;
