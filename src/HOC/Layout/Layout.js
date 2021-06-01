import React from 'react'
import SideSliders from '../../Containers/Sliders/SideSliders/SideSliders'
import Auxs from '../Auxs/Auxs'
import './Layout.css'

function Layout(props) {
    return (
        <Auxs className="Layout">
            {
            //Content

            //Slider for controls
            <SideSliders/>
            }
            <main>
                {props.children}
            </main>
        </Auxs>
    )
}

export default Layout
