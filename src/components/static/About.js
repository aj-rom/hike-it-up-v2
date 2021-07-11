// A little bit about the development. Link to blog post, github, and linkedIn

import React from 'react'
import FrameWorkTable from "./about/FrameWorkTable";

export default function About() {
    return (
        <section id='about'>
            <hgroup>
                <h2>About</h2>
                <h4>A little bit about this project.</h4>
            </hgroup>
            <section>
                <article className='grid'>
                    <section>
                        <h5>My Motivation</h5>
                        <p>A little bit about <i>why</i> I wanted to rebuild and create <code>hike-it-up</code> in the first place.</p>
                    </section>
                    <section>
                        <h5>Development Process</h5>
                        <p>Maybe go over the development process.</p>
                        <ul>
                            <li>And touch on some features</li>
                            <li>or link to somewhere</li>
                        </ul>
                    </section>
                </article>
            </section>
            <FrameWorkTable/>
        </section>
    )
}