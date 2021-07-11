import React from "react";
import FrameWorkImage from "./FrameWorkImage";

export default function FrameWorkRow(props) {
    return (
        <tr>
            <th>
                <FrameWorkImage alt={props.alt} src={props.src} url={props.url}/>
            </th>
            <td>{props.name}</td>
            <td>{props.desc}</td>
        </tr>
    )
}
