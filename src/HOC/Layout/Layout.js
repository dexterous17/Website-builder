import React from 'react'
import Auxs from '../Auxs/Auxs'

function Layout(props) {
    return (
        <Auxs>
            {
            //Content
            
            //Slider for controls
            }
            <main>
                {props.children}
            </main>
        </Auxs>
    )
}

export default Layout
