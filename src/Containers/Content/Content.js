import React from 'react'
import Main from '../../Components/UI/Main/Main'

function Content(props) {
    
    return (
        <Main {...props}>
            {props.children}
        </Main>
    )
}

export default Content
