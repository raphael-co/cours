import style from './chest.module.css'

function Chest() {
  return (
    <div className={style.body}>


      <div className={style.ligne}>
        <div className={style.box}>
          <div className={style.two}> <input className={style.Boss} type="checkbox"></input></div>

          <div className={style.one}>
            <h5 className={style.Boss2}>Hello Friend</h5>
            <p className={style.Boss2}>lorem ipsum d</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chest;
