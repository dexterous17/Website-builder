import React from 'react'
import Content from '../../Containers/Content/Content'
import SideSliders from '../../Containers/Sliders/SideSliders/SideSliders'
import Auxs from '../Auxs/Auxs'
import './Layout.css'

function Layout(props) {
    return (
        <Auxs className="Layout">
            <Content/>
            <SideSliders/>
            <main>
                {props.children}
            </main>
        </Auxs>
    )
}

export default Layout
