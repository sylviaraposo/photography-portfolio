import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navBar">
            <nav>
                <Link to="/"><img className="logo" src="./assets/logo.png" alt="picket-fence photography logo" /></Link>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/Gallery">gallery</Link></li>
                    <li><a href="">contact</a></li>
                </ul>
            </nav>
        </div>
    )

}

export default Nav;