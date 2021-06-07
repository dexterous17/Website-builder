import React from 'react'
import Button from '../UI/Button/Button';
import Image from '../UI/Image/Image';
function Tags(props) {
    let Tags = null;
    
    switch (props.Type) {
        case('Button'):
        Tags = <Button>Button</Button>  
        break;
        case('Image'):
        Tags = <Image/>
        break;
        default:
            Tags=null;
        break;
        }
    
    
    return Tags;
}

export default Tags
