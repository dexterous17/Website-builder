import React from 'react'
import SideAuxs from '../../../HOC/SideAuxs/SideAuxs'

function SideSliders(props) {
  let ClassName = props.className?props.className:null

  const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
  const position = props.position?props.position:"false"
  const right= props.right?props.right:"none";
  const left= props.left?props.left:"none";
  const top = props.top?props.top:"none";
  const bottom = props.bottom?props.bottom:"none";
  const width = props.width?props.width:"false";
  const border = props.border?props.border:"false";
  const flex= props.flex?props.flex:"false";
  const flexGrow= props.flexGrow?props.flexGrow:"false";
  const flexDirection = props.flexDirection?props.flexDirection:"false";
  const display = props.display?props.display:"block";
  const overflow= props.overflow?props.overflow:"false";

  const myStyle = {
      position:position,
      backgroundColor:backgroundColor,
      left:left,
      right:right,
      top:top,
      bottom:bottom,
      width:width,
      border:border,
      flex:flex,
      flexGrow:flexGrow,
      flexDirection:flexDirection,
      display:display,
      overflow:overflow
    }

    return (
      <SideAuxs className={ClassName} style={myStyle}>
          {props.children}
      </SideAuxs>
    )
}

export default SideSliders
