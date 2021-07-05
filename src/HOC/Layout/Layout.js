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
    
        <Tags key={tags.key} id={tags.key} Type={tags.actionpayload} td={tags.td} draggable onDragStart={DragStart} width={'100%'} border={'1px solid blue'} height={'95px'}/>
    );   

    const body =  (
    <Tags id="table" Type="Table" position="relative"  width="100vh" height="84.3vh" border="0" margin="10px">  
        <Tags Type="Tbody" position="relative" width="100vh" height="max-content" display="flex" flexDirection="column" alignItems="center" margin="10px">  
            {HTMLTags} 
        </Tags> 
    </Tags>) ;
        
    
    function DragOver(event){
        var data = event.dataTransfer.getData("Text");
        console.log(event.target.id)
        if( data==='Content-1'&&(event.target.id==='table'||event.target.id==='wrapper') ){
            dispatch(INCREMENT('Tr-td'))
        }else if( data==='Button-2' ){
            console.log('button')
        }else if( data==='Divider-3' ){

        }else if( event.target.tagName ==='TR' ){
            console.log(data)
            console.log(event.target.id)
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
            
            <SideSliders flex="2" backgroundColor="whitesmoke" flexGrow="1" display="flex" flexDirection="column" height="100vh" overflow="scroll">
               
               <ul style={{display:"flex",flexWrap:'wrap',padding:0}}>
                {
                    TagForButton.map((TagForButton=>
                        <li id={TagForButton.id} key={TagForButton.id} style={ {listStyleType: "none", marginTop:"10px",margin:"10px"}} draggable onClick={() => dispatch(INCREMENT('Tr-td'))} onDragStart={DragStart} >
                            <Tags  id={TagForButton.id} Type={TagForButton.Type} Label={TagForButton.Label} height={'95px'} width={'95px'}/>
                        </li>
                        ))
                }
                </ul>                

            </SideSliders>
            
            <Auxs>
                {props.children}
            </Auxs>
        
        </Auxs>
    )
}

export default Layout
