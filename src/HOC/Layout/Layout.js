import React from 'react'
import Content from '../../Containers/Content/Content'
import SideSliders from '../../Containers/Sliders/SideSliders/SideSliders'
import Auxs from '../Auxs/Auxs'
import {useSelector} from 'react-redux'
import './Layout.css'


function Layout(props) {

    const data = useSelector(state => state.Tags);
    

    return (
        <Auxs className="Layout">
            <Content className="Content">
                {data}
            </Content>
            <SideSliders className="SideSliders"/>
            <Auxs>
                {props.children}
            </Auxs>
        </Auxs>
    )
}

export default Layout
