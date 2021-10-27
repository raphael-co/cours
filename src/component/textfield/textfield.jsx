import style from './textfield.module.css'
import React from "react";
//checked={state.click}
function Textfield({ textenvoie1 }) {
    const textenvoie2 = (e) => {
        textenvoie1(e.target.value)
    }
    return (
        <div className={style.two}>
            <input
                onChange={textenvoie2}
                className={style.input}
                type="text"
            // value={this.state.value} 
            // onChange={this.handleChange}
            />
        </div>
    );
}

export default Textfield;