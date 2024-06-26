import React, { useState } from 'react';
import { Link } from "react-router-dom"

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>


            <nav>
                {/* <h3>Home</h3>
                <h3>About</h3> */}
                {!isMenuOpen && <button className="menu-btn" onClick={toggleMenu}>☰</button>}

                <h1>Our Website</h1>

                {/* <h3>Services</h3>
                <h3>Contact</h3> */}
            </nav>
            <div onClick={toggleMenu} className={isMenuOpen ? "overlay-shown" : "overlay"}></div>

            {isMenuOpen && (
                <nav id="modal-content">
                    <button className="menu-open" onClick={toggleMenu}>X</button>
                    <Link to="/"><button onClick={toggleMenu}>Home</button></Link>
                    <Link to="/about"><button onClick={toggleMenu}>About</button></Link>
                    <Link to="/services"><button onClick={toggleMenu}>Services</button></Link>
                    <Link to="/contact"><button onClick={toggleMenu}>Contact</button></Link>
                </nav>)}

        </>
    );
}

export default Navbar;