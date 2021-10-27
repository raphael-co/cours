import style from './footer.module.css'
import DATA from '../assets/json/info.js'
// import PropTypes from 'prop-types'

export default function Footer(backgroundColor, ...props) {

    console.log(DATA)
    return (



        // <footer className={style.hello}>
        <footer
            style={backgroundColor && { backgroundColor }}
        >
            <div className={style.box}>
                <div className={style.one}>
                    <h5 id={style.titre}
                    //  style={args.footer}
                    >{DATA.NousContacter.NousContacter}</h5>
                    <hr />
                    <p id={style.info}>{DATA.NousContacter.adresse}</p>
                    <p id={style.info}>{DATA.NousContacter.mail}</p>
                    <p id={style.info}>{DATA.NousContacter.telephone}</p>
                </div>
                {/* #399992 */}
                <div className={style.two}>
                    <h5 id={style.titre}>{DATA.QuiSommesNous.QuiSommesNous}</h5>
                    <hr />
                    <p id={style.info}>{DATA.QuiSommesNous.creation}</p>
                    <p id={style.info}>{DATA.QuiSommesNous.fondateur}</p>
                    <p id={style.info}>{DATA.QuiSommesNous.ChiffreA}</p>
                </div>
                <div className={style.three}>
                    <h5 id={style.titre}>{DATA.NosServices.NosServices}</h5>
                    <hr />
                    <p id={style.info}>{DATA.NosServices.TousNosConseils}</p>
                    <p id={style.info}>{DATA.NosServices.Devis}</p>
                    <p id={style.info}>{DATA.NosServices.EspaceClient}</p>


                </div>
            </div>
        </footer>

    )
}

// Footer.propTypes = {
//     backgroundColor : PropTypes.string,
// }

// Footer.defaultProps = {
//     backgroundColor:null,
// }