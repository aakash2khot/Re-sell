import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Item from "./Item"

function App(){
  const [items, setItems]=React.useState([{name:"Example1",price:"Rs 1999"},{name:"Example2",price:"Rs 999"}]);
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
           <Footer />
       </div>
       </section>

   );

}
export default App;
