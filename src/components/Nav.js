import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navBar">
            <nav>
                <img className ="logo" src="./assets/logo.png" alt="picket-fence photography logo" />
                <ul>
                    <li><a href="">home</a></li>
                    <li><a href="">gallery</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </nav>
        </div>
    )

}

export default Nav;