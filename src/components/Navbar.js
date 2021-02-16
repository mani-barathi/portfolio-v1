import React from 'react'
import "../css/Navbar.css"
import { Button } from '@material-ui/core'

function Navbar() {
    return (
        <div className="navbar shadow">
            <div className="navbar__wrapper">
                <div className="navbar__left">
                    <img src="https://raw.githubusercontent.com/mani-barathi/mani-barathi.github.io/master/assets/favicon.ico" alt="" className="navbar__logo" />
                </div>

                <div className="navbar__right">
                    <Button href="#about" size="medium" color="inherit">About</Button>
                    <Button href="#projects" size="medium" color="inherit">Projects</Button>
                    <Button href="#contact" size="medium" color="inherit">Contact</Button>
                </div>

            </div>
        </div>

    )
}

export default Navbar
