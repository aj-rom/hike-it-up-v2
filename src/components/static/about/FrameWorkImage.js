import React from "react";

export default function FrameWorkImage(props) {

    const style = {
        minWidth: 25,
        maxWidth: 50,
        width: 'auto',
        height: 'auto'
    }

    return <a href={props.url}><img src={props.src} alt={props.alt} style={style}/></a>
}