import { useRef } from 'react';
import { useState } from 'react';

import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import style from './chest.module.css'
import Checkbox from '../Checkbox/chekbox.jsx'

// const style = {
//     border: '1px dashed gray',
//     padding: '0.5rem 1rem',
//     marginBottom: '.5rem',
//     backgroundColor: 'white',
//     cursor: 'move',
// };
export const Card = ({ id,name, index, moveCard }) => {

    const [checked, setChecked] = useState(false)
    const test = (t) => {
        setChecked(t)
    }
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    // eslint-disable-next-line
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (

        <div id={id} ref={ref} className={style.body} data-handler-id={handlerId}>


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
                        <p className={style.Boss2}>{name}</p>
                        <p className={style.Boss2}>{id}</p>
                        {/* <p className={style.Boss2}>{hours}</p> */}

                    </div>
                </div>

            </div>
        </div>
    );


};
