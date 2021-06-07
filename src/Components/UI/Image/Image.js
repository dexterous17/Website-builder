import React from 'react'

function Image(props) {

        
    function nothing(){

    }

    const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
    const position = props.position?props.position:"none"
    const right= props.right?props.right:"none";
    const left= props.left?props.left:"none";
    const top = props.top?props.top:"none";
    const onClick = props.onClick?props.onClick:nothing;
    const padding = props.padding?props.padding:"none";
    const src = props.src?props.src:"none";
    const alt = props.alt?props.alt:"none";

    const myStyle = {
        position:position,
        backgroundColor:backgroundColor,
        left:left,
        right:right,
        top:top,
        padding:padding
  }

    return (
        <image src={src} alt={alt} style={myStyle} onClick={onClick} />
    )
}

export default Image
