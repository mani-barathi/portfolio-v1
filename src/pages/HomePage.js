import React, { useEffect, useState, useRef } from "react";
import "../css/HomePage.css";
import { Tooltip, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  const classes = useStyles();
  const [showText, setShowText] = useState(false);
  const nameRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 800);

    if (!nameRef.current) return;
    const NAME = nameRef.current.textContent;
    nameRef.current.innerHTML = "";

    for (let i = 0; i < NAME.length; i++)
      nameRef.current.innerHTML +=
        `<span class="home__nameTextLetter" >` + NAME[i] + `</span>`;

    let count = 0;
    function animateLetterByLetter() {
      if (!nameRef.current) return;
      const span = nameRef.current.querySelectorAll("span")[count];
      span.classList.add("fade");
      count++;
      if (count === NAME.length) {
        clearInterval(timer);
        timer = null;
        return;
      }
    }
    let timer = setInterval(animateLetterByLetter, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://avatars.githubusercontent.com/u/49336839?s=460&u=fbbc21b3ee2066b82cf7ddf1205524757ac5f3f4&v=4"
        alt=""
        draggable="false"
      />

      <h3 className={`home__greetingText ${showText && "fade"}`}>Hello</h3>
      <h1 ref={nameRef} className="home__nameText">
        I'm &nbsp; Manibharathi
      </h1>

      <h3 className={`home__description ${showText && "fade"}`}>
        A Computer Science student from Chennai. I enjoy Coding and Exploring
        New Technologies. Apart from Tech, I like Speedcubing.
      </h3>

      <div style={{ marginTop: "1rem" }}>
        <Tooltip
          classes={{ tooltip: classes.customTooltip }}
          title="GitHub Profile"
          arrow
        >
          <Button
            style={styles.button}
            variant="contained"
            target="_blank"
            href="https://github.com/mani-barathi"
          >
            <GitHubIcon />
          </Button>
        </Tooltip>
        &nbsp; &nbsp; &nbsp;
        <Tooltip
          classes={{ tooltip: classes.customTooltip }}
          title="LinkedIn Profile"
          arrow
        >
          <Button
            style={styles.button}
            variant="contained"
            target="_blank"
            href="https://www.linkedin.com/in/mani-bharathi-08/"
          >
            <LinkedInIcon />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "#F2F3F4",
    color: "#34495E", // var(--nameTextColor)
  },
};

const useStyles = makeStyles((theme) => ({
  customTooltip: { fontSize: "0.7rem" },
}));

export default Home;
