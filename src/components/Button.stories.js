import React from 'react';
import Button from '../components/Button';
export default{
    title: "Button",
    component: Button
}

export function DefaultButton(){
    return(
        <Button title="Add"/>
    )
}
export function SmallButton(){
    return(
        <Button title="Add" size="small"/>
    )
}
export function LargeButton(){
    return(
        <Button title="Add" size="large"/>
    )
}
