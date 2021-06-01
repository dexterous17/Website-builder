import React from 'react'
import Auxs from '../../../HOC/Auxs/Auxs'
function Button(props) {
    const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
    const position = props.position?props.position:"none"
    const right= props.right?props.right:"none";
    const left= props.left?props.left:"none";
    const myStyle = {
         position:position,
         backgroundColor:backgroundColor,
         left:left,
         right:right
   }

    
    return (
        <Auxs>
            <button style={myStyle}>+</button>
        </Auxs>
    )
}

export default Button
