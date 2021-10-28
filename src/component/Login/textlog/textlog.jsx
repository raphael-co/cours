import style from './textlog.module.css'
import React from "react";
//checked={state.click}
function TextLog({ logNameenvoie3 }) {
    const textenvoie2 = (e) => {
        logNameenvoie3(e.target.value)
    }

    return (
        <div className={style.two}>
            <input
                onChange={textenvoie2}
                // className={style.input}
                type="text"
            // value={this.state.value} 
            // onChange={this.handleChange}
            />
        </div>
    );
}

// const textenvoie2 = (e) => {
//     textenvoie1(e.target.value)
// }
// return (
//     <div className={style.two}>
//         <input
//             onChange={textenvoie2}
//             className={style.input}
//             type="text"
//         // value={this.state.value} 
//         // onChange={this.handleChange}
//         />
//     </div>
// );

export default TextLog;