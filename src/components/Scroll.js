import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: 'none', height: '650px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;

// 1px solid black