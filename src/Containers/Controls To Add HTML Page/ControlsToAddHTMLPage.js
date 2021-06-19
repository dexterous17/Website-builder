import React from 'react'
import Label from '../../Components/UI/Label/Label'
import Button from '../../Components/UI/Button/Button'
import Auxs from '../../HOC/Auxs/Auxs'
import {useDispatch} from 'react-redux'
import {INCREMENT} from '../../ReduxStore/action'

function ControlsToAddHTMLPage(props) {

    const dispatch = useDispatch();

    const controls = [
        { label: 'Button', position: 'absolute',left:'10%' },
        { label: 'Image', position: 'absolute' ,left:'10%' },
        { label: 'Label', position: 'absolute' ,left:'10%' },
        {label:'Link',position:'absolute',left:'10%'},
        {label:'Bold',position:'absolute',left:'10%'}
    ];

    return (
       <Auxs>
           <Label for="Standard">Standard</Label>            
           <ol>
                {controls.map(ctrl => (
                        <li key={ctrl.label}><Button  position={ctrl.position} left={ctrl.left}  onClick={() => dispatch(INCREMENT(ctrl.label))}>{ctrl.label}</Button></li>
                ))}
           </ol>
       </Auxs>
    )
}

export default ControlsToAddHTMLPage
