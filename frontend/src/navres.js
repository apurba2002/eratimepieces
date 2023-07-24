import { hidenav, shownav } from "./App"

function Navres() {
    return (
        <>
            <div className="nav-res">
                <img alt="" src="logo.png"></img>
                <p id="navrestxt">Menu</p>
                <img alt="" id="barger" onClick={shownav} src="navicon.png"></img>
                <img alt="" id="close" onClick={hidenav} src="close.png"></img>

            </div>
            <div className="navlink">
                <a href="index.html" onClick={hidenav}>Timepieces</a>
                <a href="#" onClick={hidenav}>Accessories</a>
                <a href="#" onClick={hidenav}>Reviews</a>
                <a href="#about" onClick={hidenav}>About Us</a>
                <a href="#" onClick={hidenav}>Support</a>
                <a href="#contact" onClick={hidenav}>Contact</a>
            </div>
        </>
    )
}
export default Navres