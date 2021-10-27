import React from "react";
import style from './heure.module.css'



function Heure({Timesmodule,value}) {
    return (
            <p className={style.heure}>{value}</p>
    );
}

export default Heure;
