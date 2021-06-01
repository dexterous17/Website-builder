import React from 'react'
import Content from '../../Containers/Content/Content'
import SideSliders from '../../Containers/Sliders/SideSliders/SideSliders'
import Auxs from '../Auxs/Auxs'
import './Layout.css'

function Layout(props) {
    return (
        <Auxs className="Layout">
            <Content className="Content"/>
            <SideSliders className="SideSliders"/>
            <Auxs>
                {props.children}
            </Auxs>
        </Auxs>
    )
}

export default Layout
