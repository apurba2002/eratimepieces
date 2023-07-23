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
                <a href="index.html">Timepieces</a>
                <a href="#">Accessories</a>
                <a href="#">Reviews</a>
                <a href="#about">About Us</a>
                <a href="#">Support</a>
                <a href="#contact">Contact</a>
            </div>
        </>
    )
}
export default Navres