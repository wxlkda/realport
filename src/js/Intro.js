import React from 'react';
import Typewriter from 'typewriter-effect';
import '../css/intro.css';
import useNav from "../hooks/useNav";
import FadeInSection from "./FadeInSection.js";

function Intro() {
    const introRef = useNav("intro");

    return (
        <div ref = {introRef} id="intro">
            <div className="intro-sentence">
                <Typewriter
                    options={{
                        delay: 50,
                        cursorClassName: 'Typewriter__cursor',
                        cursor: "|",
                    }}
                    onInit={(typewriter) => {
                        typewriter
                        .typeString('hi,')
                        .pauseFor(500)
                        .typeString(' it\'s <span class="intro-name"> <b>alwalid</b></span>.')
                        .start();
                    }}
                />
            </div>

            <FadeInSection>
                <div className="intro-rt">
                    Making something innovative.
                </div>
                <div className="intro-inspirational">
                    Future software engineer that is dedicated to developing impactful software. My passion for gaming fuels my creativity and drive, motivating me to engineer innovative solutions for a brighter future.
                </div>
                <br/>
                <a className="messageBox" href="mailto:alwalid23dec@gmail.com?subject=Hello!" rel="noopener noreferrer">
                    <div className="messageBoxText">
                        <svg className="MuiSvgIcon-root sayEmail" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
                        </svg>
                        Say hi!
                    </div>
                </a>
            </FadeInSection>
        </div>
    );
}

export default Intro;
