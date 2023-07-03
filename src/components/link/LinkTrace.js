import React from 'react';

const LinkTrace = (props) => {
    return (
        <a {...props}>
            {props.children}
        </a>
    )
}

export default LinkTrace;
