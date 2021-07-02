import React from 'react'
import Button from '../UI/Button/Button';
import Hr from '../UI/HR/Hr';
import Image from '../UI/Image/Image';
import Tr from '../UI/Tr/Tr'
import Table from '../UI/Table/Table'
import Tbody from '../UI/Tbody/Tbody'
import Trtdwithfunction from './Tr-td-with-function/Trtdwithfunction'

function Tags(props) {
    const Label = props.Label?props.Label:"Add a Label Property to the Tag";

    switch (props.Type) {
        
        case('Button'):
            return (<Button id={props.id} onClick={props.onClick} onDragStart={props.onDragStart} draggable={props.draggable}>{Label}</Button>);  
        
        case('Tr'):
            return(<Tr position="absolute" height="auto" width="auto"/>)   
        
        case('Tr-td'):
            return(<Trtdwithfunction minHeight="100px" width="80%" border="1px solid blue" td={props.td} onDrop={props.onDrop}></Trtdwithfunction>)
            
        case('Image'):
            return (<Image/>);
        

        case('HR'):
            return (<Hr/>);

        case('Table'):
            return (<Table {...props}/>)
         
        case('Tbody'):
            return(<Tbody {...props} />)

        default:
            return (null);
        
    }
}

export default Tags
