import React from 'react'
import Content from '../../Containers/Content/Content'
import SideSliders from '../../Containers/Sliders/SideSliders/SideSliders'
import Auxs from '../Auxs/Auxs'
import {useSelector} from 'react-redux'
import Tags from '../../Components/Tags/Tags'
import Main from "../../Components/UI/Main/Main"
import Button from '../../Components/UI/Button/Button'
import Hr from '../../Components/UI/HR/Hr'
import ControlsToAddHTMLPage from '../../Containers/Controls To Add HTML Page/ControlsToAddHTMLPage'


function Layout(props) {
    const data = useSelector(state => state.Tag);
    const HTMLTags= data.map((tags)=><Tags key={tags.key} Type={tags.actionpayload}/>);             
    

    return (
        <Auxs className="Layout" display="flex" position="relative" flexDirection="row" height="100vh">
            
            <SideSliders flex="1" backgroundColor="whitesmoke" position="relative"  flexGrow="1" height="100vh">
                <Button>+</Button>
            </SideSliders>
            
            <Content display="flex" flex="2" backgroundColor="lightgrey" flexGrow="4" height="100vh">
                <Main position="relative" backgroundColor="white" width="50%" height="70vh" width="50vw">
                    {HTMLTags}
                </Main>
            </Content>
            
            <SideSliders flex="3" backgroundColor="whitesmoke" flexGrow="1" height="100vh">
                <Button>+</Button>
            </SideSliders>
            
            <Auxs>
                {props.children}
            </Auxs>
        
        </Auxs>
    )
}

export default Layout
