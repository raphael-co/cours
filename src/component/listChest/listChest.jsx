import React from "react";
import { Card } from './Card';
// import Chest from '../Chest/chest.jsx'

function ListChest({ tab,setTab }) {

    const listItems = tab.map((card , index) =>
        <Card key={index} index={index} id={index} name={card.name} id={card.id} moveCard={setTab}/>
    );
  

    return (
        <div>
            {listItems}
        </div>
    );
}

export default ListChest;
