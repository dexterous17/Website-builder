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
    const display = props.display?props.display:"false";
    const justifycontent = props.justifycontent?props.justifycontent:"none";
    const alignitems = props.alignitems?props.alignitems:"none";
    const flex= props.flex?props.flex:"false";
    const flexGrow= props.flexGrow?props.flexGrow:"false";


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
        justifycontent:justifycontent,
        alignitems:alignitems,
        flex:flex,
        flexGrow:flexGrow
  }

    return (
        <main style={myStyle}>
            {props.children}
        </main>
    )
}

export default Main
