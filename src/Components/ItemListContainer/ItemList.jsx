import React from "react";
import Item from "./Item";


const ItemList = ({ productos}) => {
   let i = 1
    return (
        <div className="item-card">
            {
                productos.map((prod) => (
                    
                    <div key={prod.id}>
                        {i = i+1}
                        <Item {...prod} i={i}/>
                        
                    </div>    
                ))
            }
        </div>
    )
}

export  default ItemList



