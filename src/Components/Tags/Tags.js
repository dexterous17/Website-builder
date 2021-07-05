import React from 'react'


function Tags(props) {
    const Label = props.Label?props.Label:"Add a Label Property to the Tag";


    //CSS Property

    const backgroundColor = props.backgroundColor?props.backgroundColor:null;
    const position = props.position?props.position:null;
    const right= props.right?props.right:null;
    const left= props.left?props.left:null;
    const top = props.top?props.top:null;
    const padding = props.padding?props.padding:null;
    const bottom = props.bottom?props.bottom:null;
    const width = props.width?props.width:null;
    const height = props.height?props.height:null;
    const display = props.display?props.display:null;
    const justifyContent = props.justifyContent?props.justifyContent:null;
    const alignItems = props.alignItems?props.alignItems:null;
    const flex= props.flex?props.flex:null;
    const flexGrow= props.flexGrow?props.flexGrow:null;
    const cellSpacing = props.cellSpacing?props.cellSpacing:null;
    const cellPadding = props.cellPadding?props.cellPadding:null;
    const border = props.border?props.border:null;
    const margin = props.margin?props.margin:null;
    const onClick = props.onClick?props.onClick:() => void undefined;
    const onDragStart = props.onDragStart?props.onDragStart:() => void undefined;
    const id = props.id?props.id:null;
    const src = props.src?props.src:null;
    const alt = props.alt?props.alt:null;
    const flexDirection = props.flexDirection?props.flexDirection:null;  
    const minHeight=props.minHeight?props.minHeight:null;
  

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
        border:border,
        margin:margin,
        flexDirection:flexDirection,
        minHeight:minHeight
    }

    //CSS property ends here

    switch (props.Type) {
        
        case(   'Button'    ):
            return (    <button id={id} style={myStyle} onClick={onClick} draggable={props.draggable} onDragStart={onDragStart} onDragOver={props.onDragOver}>{Label}{props.children}</button>  );  
        
        case(   'Tr-td'    ):
            return( <tr id={props.id} style={myStyle} onDragOver={props.onDrop} draggable={props.draggable}>
                    {props.children}
                    </tr>   )
            
        case(   'Image'    ):
            return (    <image src={src} alt={alt} style={myStyle} onClick={onClick} /> );
        

        case(   'HR'    ):
            return (<hr style={myStyle}/>);

        case(   'Table' ):
            return (    <table cellPadding={cellPadding} cellSpacing={cellSpacing} style={myStyle} id={props.id}>{props.children}</table>   )
         
        case(   'Tbody' ):
            return(  <tbody style={myStyle}>{props.children}</tbody> )

        default:
            return (null);
        
    }
}

export default Tags
