import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Item from "./Item"
import Category from "./Categories"
import {Login} from "./Login"
import {Register} from "./Register"
function App(){
  const [items, setItems]=React.useState([{name:"Example1",price:"Rs 1999"},{name:"Example2",price:"Rs 999"}]);
  const [categories, setCategories]=React.useState([{name:"Smartphones"},{name:"Headphones"},{name:"Furniture"},{name:"Laptops"},{name:"Bikes"},{name:"Cars"}]);
  function addItem(item){
    setItems((prev)=>{return [...prev,item]});
  }

  return (
    <section>
       <div class="">

           <Header />
           <div class="itemsList">
           {items.map(
                (itemEntry,index) => <Item key={index} index={index} name={itemEntry.name} price={itemEntry.price} />
            )}
            </div>
            <div class="categoryList">
              <div><h3 id="catHead">Browse all our categories...</h3></div>
              <div class="categoryListpart">
                {(categories.slice(0,3)).map(
                      (categoryEntry,index) => <Category key={index} index={index} name={categoryEntry.name} />
                  )}
            </div>
            <div class="categoryListpart">
              {(categories.slice(3,categories.length)).map(
                  (categoryEntry,index) => <Category key={index} index={index} name={categoryEntry.name} />
              )}
            </div>
            </div>
           <Footer />
       </div>
       </section>

   );

}
export default App;
