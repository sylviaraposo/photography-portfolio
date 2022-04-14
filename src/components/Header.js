
import Slider from "./Slider"
import Images from "../images"

function Header() {
    return (
        <header>
            <Slider images={Images} />
        </header>
    )
}

export default Header;