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
        console.log(name)
        if (name.length >= 2) {
            tabName.push(jsonName)
        } else {
            console.log("encore")
        }
    }

   
    console.log(tabName)

    return (
        <div className={style.body}>
            <BarAdd
            // eslint-disable-next-line
                ActionNameEnvoie1={ActionNameEnvoie}
                value={actionName}
                envoie1={envoie}
                // eslint-disable-next-line
                value={name}
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
