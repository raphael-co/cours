import React, { useState } from "react";

import Chest from '../Chest/chest.jsx'

function ListChest({ envoieTabName1, tab }) {




    const envoieTabName2 = (e) => {
        envoieTabName1(e)
    }

    const listItems = tab.map((nametask) =>
        <Chest
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
