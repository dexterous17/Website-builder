import React from 'react';

function Auxs(props){

    let ClassName = props.className?props.className:null

    const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
    const position = props.position?props.position:"none"
    const right= props.right?props.right:"false";
    const left= props.left?props.left:"false";
    const top = props.top?props.top:"false";
    const bottom = props.bottom?props.bottom:"false";
    const display = props.display?props.display:"block";
    const flexDirection = props.flexDirection?props.flexDirection:"false";
    const flex= props.flex?props.flex:"false";
    const height= props.height?props.height:"false";

    const myStyle = {
        position:position,
        backgroundColor:backgroundColor,
        left:left,
        right:right,
        top:top,
        bottom:bottom,
        display:display,
        flexDirection:flexDirection,
        flex:flex,
        height:height
  }
    
    return(
        <div className={ClassName} style={myStyle}>{props.children}</div>
    )
};
export default Auxs