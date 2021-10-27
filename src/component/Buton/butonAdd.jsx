// import React, { useState, useReducer } from "react";
import style from './butonAdd.module.css'


function ButonAdd({actionenvoie1}) {


  const actionenvoie2 = (e) => {
    actionenvoie1()
}



  return (
    <div className={style.body}>
      <button type="submit" onClick={actionenvoie2} className={style.button}><p>Ajouter</p></button>
    </div>
  );
}

export default ButonAdd;
