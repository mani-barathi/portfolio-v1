import React, { useEffect, useState, useRef } from 'react'
import "../css/HomePage.css"

function Home() {
    const [showText, setShowText] = useState(false)
    const nameRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setShowText(true)
        }, 800)

        const NAME = nameRef.current.textContent
        nameRef.current.innerHTML = ''

        for (let i = 0; i < NAME.length; i++)
            nameRef.current.innerHTML += `<span class="home__nameTextLetter" >` + NAME[i] + `</span>`


        let count = 0;
        function animateLetterByLetter() {
            const span = nameRef.current.querySelectorAll('span')[count]
            span.classList.add('fade')
            count++
            if (count === NAME.length) {
                clearInterval(timer)
                timer = null
                return
            }
        }
        let timer = setInterval(animateLetterByLetter, 50)

    }, [])

    return (
        <div className="home">

            <img className="home__image" src="https://avatars.githubusercontent.com/u/49336839?s=460&u=fbbc21b3ee2066b82cf7ddf1205524757ac5f3f4&v=4" alt="" draggable="false" />

            <h3 className={`home__greetingText ${showText && 'fade'}`}>
                Hello
            </h3>
            <h1 ref={nameRef} className="home__nameText" >
                I'm &nbsp; Manibharathi
            </h1>

            <h3 className={`home__description ${showText && 'fade'}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eius.
            </h3>


            <h4 className="love-text">Made with 💙</h4>
        </div>
    )
}

export default Home
