import React, { useState } from "react";
import style from './header.module.css'
import Heure from '../heure/heure.jsx'

function Header({showSidebarbut,namehea}) {


  const [time, setTime] = useState("")


  const showSidebarbuton = () => {
    showSidebarbut()
  }




  const hoursTime = () => {
    var d = new Date()
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    setTime(hours)
  }
  setInterval(hoursTime, 1000);
  // console.log(time)

  const Times = (t) => {
    setTime(t)
  }
  return (



    <header className={style.hello}>
      {/* <p className={style.Boss2}>Hello Friend</p>
      <Heure
        Timesmodule={Times}
        value={time}

      ></Heure>
      <div className={style.Boss}><p>Boss</p></div> */}

      <div className={style.box}>
        <div className={style.one}>
          <p className={style.Boss2}>test</p>
        </div>
        <div className={style.two}>
          <Heure
            Timesmodule={Times}
            value={time}
          ></Heure>
        </div>
        <div className={style.three}>
          <div className={style.Boss} onClick={showSidebarbuton}><p>{namehea.Nameheader}</p></div>
        </div>
      </div>
    </header>

  )
}
export default Header;