import React from 'react'
import Button from '../Button/Button'


function Ol(props) {

    return (
        <ol>
            {props.data.map(tag=>(
                <li><Button></Button></li>
            ))}            
        </ol>
    )
}

export default Ol
