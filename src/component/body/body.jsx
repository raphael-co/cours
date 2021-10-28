//eslint-disable-next-line
import { useState, useCallback } from 'react';
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import style from './body.module.css'
import ListChest from '../listChest/listChest.jsx'
import BarAdd from '../barAdd/barAdd.jsx'



function Body() {




    const [name, setName] = useState('')
    const [actionName, setActionName] = useState('')
    const [tabName, setTabName] = useState([])

    console.log(name)

    const envoie = (t) => {
        setName(t)
    }

    const envoieTabName = (t) => {
        setTabName(t)
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
    const test = getRandomInt(1000)

    const jsonName = {
        "name": name,
        "id":test

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
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = tabName[dragIndex];
        setTabName(update(tabName, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }
        ));
    }, [tabName]);

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
            <DndProvider backend={HTML5Backend}>
                <ListChest
                    // eslint-disable-next-line
                    envoieTabName1={envoieTabName}
                    tab={tabName}
                    setTab={moveCard}
                />
            </DndProvider>
        </div>
    );
}

export default Body;
