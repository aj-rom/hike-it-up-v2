import React from "react";

const TrailLocation = (props) => {

    const { address } = props
    const apiKey = "AIzaSyAUosZLqgJn74QbHeeY9yTF91TphLJuR8Q"
    const zoom = 15

    return (
        <iframe title='map'
            width="100%" height="100%"
            style={ { border: 0, minHeight: 500 } }
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?&q=${address}&zoom=${zoom}&key=${apiKey}`}
        />
    )
}

export default TrailLocation