import React from 'react';

function Button(props){
    const size = props.size;
    return (
        <button onClick={props.onClick} className={["buttonDefault", size].join(" ")}>
            {props.title}
        </button>
    )
}
export default Button