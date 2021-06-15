import React from 'react'
import Button from '../UI/Button/Button';
import Hr from '../UI/HR/Hr';
import Image from '../UI/Image/Image';

function Tags(props) {
        
    switch (props.Type) {
        
        case('Button'):
            return (<Button>Button</Button>);  
        
        
        case('Image'):
            return (<Image/>);
        

        case('HR'):
            return (<Hr/>);


        default:
            return (null);
        
    }
    
}

export default Tags
