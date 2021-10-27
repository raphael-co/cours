import React from "react";

import Chest from '../Chest/chest.jsx'

function ListChest({ tab }) {

    const listItems = tab.map((nametask , index) =>
        <Chest
        key = {index}
        nameChest ={nametask}
        ></Chest>
    );

    return (
        <div>
            {listItems}
        </div>
    );
}

export default ListChest;
