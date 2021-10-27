import React, { useState } from "react";
import style from './chest.module.css'
import Checkbox from '../Checkbox/chekbox.jsx'

function Chest({ nameChest }) {

  const [checked, setChecked] = useState(false)
  const test = (t) => {
    setChecked(t)
  }
  return (
    <div className={style.body}>


      {/* className={checked == false ? `${style.ligne}` : ''} */}
      {/* <div className={style.ligne `${checked == false? `${style.ligne}` : ""}`}></div> */}
      <div className={checked === false ? `${style.ligne}` : `${style.ligneTrue}`}>
        <div className={style.box}>
          {/* <div className={style.two}> <input className={style.Boss} type="checkbox"></input></div> */}
          <Checkbox
            test1={test}
            value={checked}
          />
          <div className={style.one}>
            <h5 className={style.Boss2}>Hello Friend</h5>
            <p className={style.Boss2}>{nameChest.name}</p>
            {/* <p className={style.Boss2}>{hours}</p> */}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Chest;
