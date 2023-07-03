import React from 'react';

const ImageZoom = ({ zoom, ...other }) => {
    const zoomRef = React.useRef(zoom.clone(other));
    zoomRef.current.on('open')


    function attachZoom(image) {
        zoomRef.current.attach(image);
    }

    return <img alt={"zoom"} ref={attachZoom} {...other} />
};

export default ImageZoom;
