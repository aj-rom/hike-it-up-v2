import React from "react";
import {FlatIronLink, HikeItUpLink} from "./links";

const Motivation = () => (
    <article>
        <hgroup>
            <h5>My Motivation</h5>
            <h6>Some background on why <b>hike-it-up</b> was created.</h6>
        </hgroup>
        <summary className='grid'>
            <p>
                I first created <HikeItUpLink/> as a basic sinatra application.
                After progressing a long way through <FlatIronLink/>
                I wanted to test my knowledge by utilizing <b>React & Redux</b>,
                as well as <b>Ruby on Rails</b> to build a functional web application.
                <br/><br/>
                Thus why I ended up re-creating <HikeItUpLink/>,
                and utilizing all the nice state management and DOM manipulation aspects of React & Redux.
                <br/><br/>
                All in all I feel as if this was a great test of my abilities of having seamless interaction
                between frontend and backend servers, and I am happy with the final result.
            </p>
            <p>
                One large portion of modern day web applications focus on <b>Mobile First Development</b>,
                ensuring that the application looks and functions correctly on mobile devices.
                This also must <i>scale up</i> to larger devices, such as laptops, desktop, and tablets.
                Which can sometimes be a headache.
                <br/><br/>
                I was driven to achieve this so decided to use <b>PicoCSS</b>,
                which allowed me to add customization as well as simple implementation of a
                friendly <b>Mobile First</b> application.
            </p>
        </summary>
    </article>
)

export default Motivation