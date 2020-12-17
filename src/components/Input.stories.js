import React from 'react';
import Input from '../components/Input';
export default{
    title: "Input",
    component: Input
}

export function inputDefault(){
    return(
        <Input type="text" value="" onChange="" />
    )
}
