import style from './footer.module.css'

function Footer() {

    return (



        <footer className={style.hello}>
            <div className={style.box}>
                <div className={style.one}>
                    <h5>titre 1</h5>
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
export default Footer;