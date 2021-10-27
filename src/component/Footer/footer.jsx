import style from './footer.module.css'
// import PropTypes from 'prop-types'

export default function Footer(backgroundColor,...props) {
    return (



        // <footer className={style.hello}>
        <footer className={style.hello}
        style={backgroundColor && {backgroundColor}}
        >
            <div className={style.box}>
                <div className={style.one}>
                    <h5
                    //  style={args.footer}
                     >titre 1</h5>
                    <p>lorem ipsum dolor</p>
                    <p>lorem ipsum dolor</p>
                    <p>lorem ipsum dolor</p>
                    </div>
                <div className={style.two}>
                    <h5>Qui sommes nous</h5>
                    <p>lorem ipsum dolor</p>
                    <p>lorem ipsum dolor</p>
                    <p>lorem ipsum dolor</p>
                </div>
                <div className={style.three}>
                    <h5>nous contacter</h5>
                    <p>lorem ipsum dolor</p>
                    <p>lorem ipsum dolor</p>
                    <p>lorem ipsum dolor</p>
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