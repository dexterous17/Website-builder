import React from 'react'
import Label from '../../Components/Label/Label'
import Button from '../../Components/UI/Button/Button'
import Auxs from '../../HOC/Auxs/Auxs'
function ControlsToAddHTMLPage(props) {

    function addHTMLTags() {
        console.log("Hello World")
    }


    return (
       <Auxs position="absolute" top="3%" left="1%">
           <Label> -/ List of Available tag</Label>
           <Button position="absolute" left="10%" onClick={addHTMLTags}>Add Button</Button>
       </Auxs>
    )
}

export default ControlsToAddHTMLPage
