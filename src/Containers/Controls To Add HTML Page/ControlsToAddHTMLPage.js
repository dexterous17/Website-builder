import React from 'react'
import Label from '../../Components/UI/Label/Label'
import Button from '../../Components/UI/Button/Button'
import Auxs from '../../HOC/Auxs/Auxs'
function ControlsToAddHTMLPage(props) {

    const controls = [
        { label: 'Button', position: 'absolute',left:'10%' },
        { label: 'Image', position: 'absolute' ,left:'10%' },
        { label: 'Label', position: 'absolute' ,left:'10%' },
        {label:'Empty box',position:'absolute',left:'10%'},
        {label:'Link',position:'absolute',left:'10%'},
        {label:'Bold',position:'absolute',left:'10%',padding:'10px'}
    ];
   
    function addHTMLTags(e,params) {
        e.preventDefault();
        console.log(params)
    }

    return (
       <Auxs position="absolute" top="3%" left="1%">
           <Label for="-/ List of Available tag"> -/ List of Available tag</Label>            
           <ol>
                {controls.map(ctrl => (
                        <li><Button value={ctrl.value} position={ctrl.position} left={ctrl.left} padding={ctrl.padding?ctrl.padding:"none"}onClick={(e) => addHTMLTags(e,ctrl.label)}>{ctrl.label}</Button></li>
                ))}
           </ol>
       </Auxs>
    )
}

export default ControlsToAddHTMLPage
