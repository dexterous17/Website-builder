import React from 'react'

function Label(props) {

    function nothing(){

    }

    const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
    const position = props.position?props.position:"none"
    const right= props.right?props.right:"none";
    const left= props.left?props.left:"none";
    const top = props.top?props.top:"none";
    const onClick = props.onClick?props.onClick:nothing;

    const myStyle = {
        position:position,
        backgroundColor:backgroundColor,
        left:left,
        right:right,
        top:top
  }

    return (
        <label for={props.label} style={myStyle} onClick={onClick}>
            {props.children}
        </label>
    )
}

export default Label
