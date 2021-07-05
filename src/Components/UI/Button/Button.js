import React from 'react'
function Button(props) {
    
    const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
    const position = props.position?props.position:"none"
    const right= props.right?props.right:"none";
    const left= props.left?props.left:"none";
    const top = props.top?props.top:"none";
    const onClick = props.onClick?props.onClick:() =>{};
    const padding = props.padding?props.padding:"none";
    const onDragStart = props.onDragStart?props.onDragStart:() =>{};
    const id = props.id?props.id:"No id";
    const myStyle = {
        position:position,
        backgroundColor:backgroundColor,
        left:left,
        right:right,
        top:top,
        padding:padding
  }
    
    return (
        <button id={id} style={myStyle} onClick={onClick} draggable={props.draggable} onDragStart={onDragStart} onDragOver={props.onDragOver}>{props.children}</button>
    )
}

export default Button
