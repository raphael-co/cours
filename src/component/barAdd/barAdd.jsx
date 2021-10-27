import React from "react";
import style from './barAdd.module.css'
import Textfield from '../textfield/textfield.jsx'
import ButonAdd from '../Buton/butonAdd.jsx'

function BarAdd({ envoie1, name, ActionNameEnvoie1, ActionName }) {

    const textenvoie = (t) => {
        envoie1(t)
    }
    const actionenvoie = (t) => {
        ActionNameEnvoie1(t)
    }
    return (
        <div className={style.body}>
            {/* className={checked == false ? `${style.ligne}` : ''} */}
            {/* <div className={style.ligne `${checked == false? `${style.ligne}` : ""}`}></div> */}
            <div className={style.ligne}>
                <div className={style.box}>
                    <div className={style.two}>
                        <ButonAdd
                            actionenvoie1={actionenvoie}
                            value={ActionName}
                        ></ButonAdd>
                    </div>
                    <div className={style.one}>
                        <Textfield
                            textenvoie1={textenvoie}
                            nam2={name}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}




// function Chest() {


//     // className={style.ligne}
//     const [checked, setChecked] = useState(false)
//     const test = (t) => {
//       setChecked(t)
//     }

//     return (
//       <div className={style.body}>
//         {/* className={checked == false ? `${style.ligne}` : ''} */}
//         {/* <div className={style.ligne `${checked == false? `${style.ligne}` : ""}`}></div> */}
//         <div className={checked == false ? `${style.ligne}` : `${style.ligneTrue}`}>
//           <div className={style.box}>
//             {/* <div className={style.two}> <input className={style.Boss} type="checkbox"></input></div> */}
//             <Checkbox
//               test1={test}
//               value={checked}
//             />
//             <div className={style.one}>
//               <h5 className={style.Boss2}>Hello Friend</h5>
//               <p className={style.Boss2}>lorem ipsum d</p>
//             </div>
//           </div>

//         </div>
//       </div>

export default BarAdd;
