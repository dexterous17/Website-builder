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
    
        <Tags key={tags.key} Type={tags.actionpayload} td={tags.td}/>
    );   

    const body =  (
    <Tags Type="Table" position="relative"  width="100%" height="90vh" border="0" margin="10px">  
        <Tags Type="Tbody" position="relative" width="100%" height="max-content" display="flex" flexDirection="column" alignItems="center">  
            {HTMLTags} 
        </Tags> 
    </Tags>) ;
    

    
    function dragStart(event) {
        dispatch(INCREMENT('Tr-td'))
      }
      
      
      
      function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        console.log(data)
        dispatch(INCREMENT(data))
        
      }


    return (
        <Auxs className="Layout" display="flex" position="relative" flexDirection="row" height="auto">
                       
            <Content position="relative" display="flex" flex="2" backgroundColor="lightgrey" flexGrow="4" width="100%" height="92.5vh" justifyContent="center" overflow="scroll" >
                <Main id="wrapper" position="relative"  backgroundColor="white" width="inherit" height="max-content" margin="10px">
                    {
                        body
                    }
                </Main>
            </Content>
            
            <SideSliders flex="3" backgroundColor="whitesmoke" height="100%" flexGrow="1" display="flex" flexDirection="column" height="100vh" overflow="scroll">
                <Tags Type="Button" Label="Tr-td" draggable={true} onClick={() => dispatch(INCREMENT('Tr-td'))} onDragStart={()=>dragStart('Td-tr')} ondrop={(event)=>drop(event)} />
                <Tags Type="Button" Label="Add Button" onClick={() => dispatch(INCREMENT('Button'))}/>
            </SideSliders>
            
            <Auxs>
                {props.children}
            </Auxs>
        
        </Auxs>
    )
}

export default Layout
