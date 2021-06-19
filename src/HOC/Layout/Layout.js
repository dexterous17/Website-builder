import React from 'react'
import Content from '../../Containers/Content/Content'
import SideSliders from '../../Containers/Sliders/SideSliders/SideSliders'
import Auxs from '../Auxs/Auxs'
import {useSelector,useDispatch} from 'react-redux'
import Tags from '../../Components/Tags/Tags'
import Main from "../../Components/UI/Main/Main"
import {INCREMENT} from '../../ReduxStore/action'

function Layout(props) {
    
    const dispatch = useDispatch()
    
    const data = useSelector(state => state.Tag);
    
    const HTMLTags= data.map((tags)=>
    
        <Tags key={tags.key} Type={tags.actionpayload}/>
    );   

    const body =  (
    <Tags Type="Table" position="absolute" width="100%" height="auto">  
        <Tags Type="Tbody" position="relative" width="100%" height="auto" display="flex" flexDirection="column" >  
            {HTMLTags} 
        </Tags> 
    </Tags>) ;
    
    

    return (
        <Auxs className="Layout" display="flex" position="relative" flexDirection="row" height="100vh">
                       
            <Content display="flex" flex="2" backgroundColor="lightgrey" flexGrow="4" height="100vh" justifyContent="center" alignItems="center">
                <Main position="relative" backgroundColor="white" width="50%" height="70vh" width="50vw">
                    {
                        body
                    }
                </Main>
            </Content>
            
            <SideSliders flex="3" backgroundColor="whitesmoke" flexGrow="1" height="100vh" display="flex" flexDirection="column">
                <Tags Type="Button" Label="Add Content" onClick={() => dispatch(INCREMENT('Tr-td'))} />
                <Tags Type="Button" Label="Add Button" onClick={() => dispatch(INCREMENT('Button'))}/>
            </SideSliders>
            
            <Auxs>
                {props.children}
            </Auxs>
        
        </Auxs>
    )
}

export default Layout
