import React from 'react'

function Main(props) {

    const backgroundColor = props.backgroundColor?props.backgroundColor:"none"
    const position = props.position?props.position:"none"
    const right= props.right?props.right:"none";
    const left= props.left?props.left:"none";
    const top = props.top?props.top:"none";
    const padding = props.padding?props.padding:"none";
    const bottom = props.bottom?props.bottom:"none";
    const width = props.width?props.width:"none";
    const height = props.height?props.height:"none";
    const minHeight = props.minHeight?props.minHeight:"none";
    const display = props.display?props.display:"false";
    const justifyContent = props.justifyContent?props.justifyContent:"false";
    const alignItems = props.alignItems?props.alignItems:"false";
    const flex= props.flex?props.flex:"false";
    const flexGrow= props.flexGrow?props.flexGrow:"false";
    const overflow= props.overflow?props.overflow:"false";
    const margin = props.margin?props.margin:"false";
    const id = props.id?props.id:"";


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
        display:display,
        justifyContent:justifyContent,
        alignItems:alignItems,
        flex:flex,
        flexGrow:flexGrow,
        minHeight:minHeight,
        overflow:overflow,
        margin:margin
  }

    return (
        <main id={id} style={myStyle} onDrop={props.onDrop} onDragOver={props.onDragOver}>
            {props.children}
        </main>
    )
}

export default Main
