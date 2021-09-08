// A little bit about the development. Link to blog post, github, and linkedIn

import React from 'react'
import FrameWorkTable from "./about/FrameWorkTable";
import Development from "./about/Development";
import Motivation from "./about/Motivation";

export default function About() {
    return (
        <section id='about'>
            <hgroup>
                <h2>About</h2>
                <h4>A little bit about this project.</h4>
            </hgroup>
            <section>
                <Motivation/>
                <Development/>
            </section>
            <FrameWorkTable/>
        </section>
    )
}