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
    const TagForButton = useSelector(state=> state.TagForButton)
    
    const HTMLTags= data.map((tags)=>
    
        <Tags key={tags.key} Type={tags.actionpayload} td={tags.td} onDragOver={() => DragOver()}/>
    );   

    const body =  (
    <Tags Type="Table" position="relative"  width="100%" height="90vh" border="0" margin="10px">  
        <Tags Type="Tbody" position="relative" width="100%" height="max-content" display="flex" flexDirection="column" alignItems="center">  
            {HTMLTags} 
        </Tags> 
    </Tags>) ;
        
    
    function DragOver(event){
        var data = event.dataTransfer.getData("Text");
        if(data==='Tr-td'){
            dispatch(INCREMENT('Tr-td'))
        }
    }
      

    function onDragOver(event){
        event.preventDefault();
    }

    function DragStart(event){
        console.log(event.target.id)
        event.dataTransfer.setData("Text", event.target.id);
    }
    
    return (
        <Auxs className="Layout" display="flex" position="relative" flexDirection="row" height="auto">
                       
            <Content position="relative" display="flex" flex="2" backgroundColor="lightgrey" flexGrow="4" width="100%" height="92.5vh" justifyContent="center" overflow="scroll" >
                <Main id="wrapper" position="relative"  backgroundColor="white" width="inherit" height="max-content" margin="10px" onDrop={DragOver} onDragOver={onDragOver}>
                    {
                        body
                    }
                </Main>
            </Content>
            
            <SideSliders flex="3" backgroundColor="whitesmoke" height="100%" flexGrow="1" display="flex" flexDirection="column" height="100vh" overflow="scroll">
                {
                    TagForButton.map((TagForButton=>
                        <Tags key={TagForButton.id} id={TagForButton.id} Type={TagForButton.Type} />
                        ))
                }
                
                <Tags Type="Button" id="Tr-td" Label="Tr-td" draggable onClick={() => dispatch(INCREMENT('Tr-td'))} onDragStart={DragStart} />
                <Tags Type="Button" Label="Add Button" onClick={() => dispatch(INCREMENT('Button'))}/>
                <Tags Type="Button" Label="Add Divider" draggable />
                <Tags Type="Button" Label="Add Heading" draggable/>
                <Tags Type="Button" Label="Add HTML" draggable/>
                <Tags Type="Button" Label="Add Image" draggable/>
                <Tags Type="Button" Label="Add Menu" draggable/>
                <Tags Type="Button" Label="Add Social" draggable/>
                <Tags Type="Button" Label="Add Text" draggable/>
                <Tags Type="Button" Label="Add Video" draggable/>
                    
            </SideSliders>
            
            <Auxs>
                {props.children}
            </Auxs>
        
        </Auxs>
    )
}

export default Layout
