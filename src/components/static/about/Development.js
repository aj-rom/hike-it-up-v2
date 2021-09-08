import React from "react";
import {CreateReactApp} from "./links";

const Development = () => (
    <article>
        <hgroup>
            <h5>Development Process</h5>
            <h6>Some background on how <b>hike-it-up</b> was created.</h6>
        </hgroup>
        <summary className='grid'>
            <p>I first started by laying out the architecture of the <b>Ruby On Rails</b> backend.
                I needed to get a couple of things situated:
                <br/><br/>
                <ul>
                    <li>Setup PostgreSQL for our database</li>
                    <li>Create object models and relations through <b>Active Record</b></li>
                    <li>Declare <i>routes</i> and <i>controllers</i> for handling incoming requests.</li>
                </ul>
                Next, I wrote some simple tests to ensure that everything was working as it should.
                Once I had the basic structure of the backend up and running, I could then start creating the frontend.
            </p>
            <p>
                I started by utilizing the <CreateReactApp/> toolchain to generate a new React application.
                Next, I decided to go ahead and install <b>ReactRouter</b> and <b>Redux</b>
            </p>
        </summary>
    </article>
)

export default Development