import React from 'react'

function Trtdwithfunction(props) {
    const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
    const position = props.position?props.position:"none"
    const right= props.right?props.right:"none";
    const left= props.left?props.left:"none";
    const top = props.top?props.top:"none";
    const padding = props.padding?props.padding:"none";
    const bottom = props.bottom?props.bottom:"none";
    const width = props.width?props.width:"none";
    const height = props.height?props.height:"none";
    const display = props.display?props.display:"false";
    const justifyContent = props.justifyContent?props.justifyContent:"false";
    const alignItems = props.alignItems?props.alignItems:"false";
    const flex= props.flex?props.flex:"false";
    const flexGrow= props.flexGrow?props.flexGrow:"false";
    const border= props.border?props.border:"false";
    const minHeight=props.minHeight?props.minHeight:"false";
    const flexDirection = props.flexDirection?props.flexDirection:"false";

    const myStyle = {
        position:position,
        backgroundColor:backgroundColor,
        left:left,
        right:right,
        top:top,
        bottom:bottom,
        padding:padding,
        width:width,
        height:height,
        minHeight:minHeight,
        display:display,
        justifyContent:justifyContent,
        alignItems:alignItems,
        flex:flex,
        flexGrow:flexGrow,
        border:border,
        flexDirection:flexDirection
  }

  

  const myStyleTd= {
      width:'100px',
      height:'100px',
      border:'1px solid black'
  }
 
  
    
  const HTMLTags = props.td.map((tags)=>
     <td key={tags} style={myStyleTd}></td>
  );  

    return (
        <tr id={props.id} style={myStyle} onDragOver={props.onDrop}>
            {HTMLTags}
            {props.children}
        </tr>
    )
}

export default Trtdwithfunction
