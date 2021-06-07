import React from 'react'
import Content from '../../Containers/Content/Content'
import SideSliders from '../../Containers/Sliders/SideSliders/SideSliders'
import Auxs from '../Auxs/Auxs'
import {useSelector} from 'react-redux'
import './Layout.css'
import Tags from '../../Components/Tags/Tags'


function Layout(props) {
    const data = useSelector(state => state.Tag);
    const HTMLTags= data.map((tags)=><Tags key={tags.key} Type={tags.actionpayload}/>);             
    

    return (
        <Auxs className="Layout">
            <Content className="Content">
                {HTMLTags}
            </Content>
            <SideSliders className="SideSliders"/>
            <Auxs>
                {props.children}
            </Auxs>
        </Auxs>
    )
}

export default Layout
