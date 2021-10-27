import React from "react";
import style from './chekbox.module.css'

//checked={state.click}
function Chekbox({test1, value}) {

    const test3=(e)=>{
        test1(e.target.checked);
    }
    return (
        <div className={style.two}>
            <input
                className={style.check}
                onChange={e => test3(e)}
                type="checkbox" >

            </input>
        </div>
    );
    
}

export default Chekbox;