import React from "react";
import Item from "./Item";


const ItemList = ({ productos}) => {
   
    return (
        <div className="item-card">
            {
                productos.map((prod) => (
                    <div key={prod.id}>
                        <Item {...prod} />
                    </div>    
                ))
            }
        </div>
    )
}

export  default ItemList



