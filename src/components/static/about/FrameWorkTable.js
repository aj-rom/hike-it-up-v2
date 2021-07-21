import React from "react";
import { frameworks } from "./frameworks";
import FrameWorkRow from "./FrameWorkRow";

export default function FrameWorkTable() {

    function renderTableRows() {
        return frameworks.sort(e => e.name).map(e => {
            const { name, url, desc, alt, src } = e
            return <FrameWorkRow name={name} url={url} desc={desc} alt={alt} src={src} />
        })
    }

    return (
        <section>
            <header>
                <hgroup>
                    <h3>FrameWorks Used</h3>
                    <h5>A comprehensive list of every open-source library used in this project.</h5>
                </hgroup>
            </header>
            <table>
                <thead>
                <tr>
                    <th>Link</th>
                    <th>Framework</th>
                    <th>Usage Description</th>
                </tr>
                </thead>
                <tbody> {renderTableRows()} </tbody>
            </table>
        </section>
    )
}