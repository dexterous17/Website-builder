import React from 'react'
import Auxs from '../../../HOC/Auxs/Auxs'
function Button(props) {
    
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
    
    <Auxs>
        <button style={myStyle} onClick={onClick}>{props.children}</button>
    </Auxs>
    
    )
}

export default Button