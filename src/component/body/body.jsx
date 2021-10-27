import React, { useState } from "react";
import style from './body.module.css'
import ListChest from '../listChest/listChest.jsx'
import BarAdd from '../barAdd/barAdd.jsx'


function Body() {


    const [name, setName] = useState('')
    const [actionName, setActionName] = useState('')
    const [tabName, setTabName] = useState([])

    const envoie = (t) => {
        setName(t)
    }

    const envoieTabName = (t) => {
        setTabName(t)
    }

    const jsonName = {
        "name": name
    }


    const ActionNameEnvoie = (t) => {
        setActionName(t)
        if (name.length >= 2) {
            const tableau = [...tabName]

            tableau.push(jsonName)
            setTabName(tableau)
        } else {
            console.log("encore")
        }
    }

    return (
        <div className={style.body}>
            <BarAdd
                // eslint-disable-next-line
                ActionNameEnvoie1={ActionNameEnvoie}
                value={actionName}
                envoie1={envoie}
                // eslint-disable-next-line
                name1={name}
            />
            <br />
            <ListChest
                // eslint-disable-next-line
                envoieTabName1={envoieTabName}
                tab={tabName}
            />
        </div>
    );
}

export default Body;
