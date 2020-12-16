import React from 'react';

function Input(props){
    
    return (
        <input type={props.type} value={props.value} onChange={props.onChange} className="inputDefault">
            
        </input>
    )
}
export default Input