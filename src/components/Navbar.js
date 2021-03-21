import React, { useState, useEffect } from 'react'
import "../css/Navbar.css"
import { useHistory, useLocation } from "react-router-dom"
import { Button } from '@material-ui/core'

function Navbar() {
    const histroy = useHistory()
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState('/')

    useEffect(() => {
        setCurrentLocation(location.pathname)
    }, [location.pathname])

    useEffect(() => {
        let unsubscribe = histroy.listen((location, action) => {
            setCurrentLocation(location.pathname)
        })
        return unsubscribe
    }, [histroy])

    const goToRoute = (route) => {
        histroy.push(route)
    }


    return (
        <div className="navbar shadow">
            <div className="navbar__wrapper">
                <div className="navbar__left">
                    <img src="/favicon.ico" onDoubleClick={() => goToRoute('/admin')} alt="" className="navbar__logo" />
                </div>

                <div className="navbar__right">
                    <Button onClick={() => goToRoute('/')} color={currentLocation === '/' ? 'secondary' : 'inherit'}>
                        Home
                    </Button>
                    <Button onClick={() => goToRoute('/projects')} color={currentLocation === '/projects' ? 'secondary' : 'inherit'}>
                        Projects
                    </Button>
                    <Button onClick={() => goToRoute('/contact')} color={currentLocation === '/contact' ? 'secondary' : 'inherit'}>
                        Contact
                    </Button>
                </div>

            </div>
        </div>

    )
}

export default Navbar
