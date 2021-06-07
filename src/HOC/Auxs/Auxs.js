import React from 'react';

function Auxs(props){

    let ClassName = props.className?props.className:null

    const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
    const position = props.position?props.position:"none"
    const right= props.right?props.right:"none";
    const left= props.left?props.left:"none";
    const top = props.top?props.top:"none";
    const bottom = props.bottom?props.bottom:"none";

    const myStyle = {
        position:position,
        backgroundColor:backgroundColor,
        left:left,
        right:right,
        top:top,
        bottom:bottom
  }
    
    return(
        <div className={ClassName} style={myStyle}>{props.children}</div>
    )
};
export default Auxs