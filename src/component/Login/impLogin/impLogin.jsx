import React from "react";
import style from './impLogin.module.css'
import TextLog from '../textlog/textlog.jsx'
import ButonLogin from '../Buton/ButonLog.jsx'

function ImpLogin({ logNameenvoie1, valueName, action1, actionenvoieName1 }) {

    const logNameenvoie2 = (t) => {
        logNameenvoie1(t)
    }
    const actionenvoieName2 = (t) => {
        actionenvoieName1(t)
    }


    return (
        <div className={style.body}>
            <div className={style.ligne}>
                <div className={style.box}>
                    <div className={style.two}>
                        <ButonLogin
                            actionenvoieName3={actionenvoieName2}
                            action2={action1}
                        ></ButonLogin>
                    </div>
                    <div className={style.one}>
                        <TextLog
                            logNameenvoie3={logNameenvoie2}
                            name={valueName}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ImpLogin;
