// import React, { useState, useReducer } from "react";
import style from './BoutonLog.module.css'
// eslint-disable-next-line
import { Link } from "react-router-dom";


function BoutonLogin({actionenvoieName3}) {

  const actionenvoieName4 = () => {
    actionenvoieName3()
}

  return (
    <div className={style.body}>

      <Link to={`/home`}>
        <button  href={`/home`} type="submit" onClick={actionenvoieName4} className={style.button}><p>se connecter</p></button>
        </Link>
      
    </div>
  );
}

export default BoutonLogin;
