import React from "react"
function Category(props){
  return (
        <div className="category">
            <h2 id="catName">{props.name}</h2>
        </div>

    );
}
export default Category;
