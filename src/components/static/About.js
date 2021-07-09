// A little bit about the development. Link to blog post, github, and linkedIn

import React from 'react'

export default function About() {

    return(
        <section id='about'>
            <hgroup>
                <h2>About</h2>
                <h4>A little bit about this project.</h4>
            </hgroup>
            <p>This is some page content.</p>

            <article>
                <header>
                    <h3>FrameWorks Used</h3>
                </header>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>React.js</li>
                    <li>React-Redux</li>
                    <li>Redux-thunk</li>
                    <li>PicoCSS</li>
                </ul>
            </article>
        </section>
    )
}