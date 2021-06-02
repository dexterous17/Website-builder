import React from 'react'
import Label from '../../Components/UI/Label/Label'
import Button from '../../Components/UI/Button/Button'
import Auxs from '../../HOC/Auxs/Auxs'
function ControlsToAddHTMLPage(props) {

    const state = {
        button:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        Input:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        Image:{
            elementType:'Button',
            elementConfig:{
                function_params:"Image",
                position:"absolute",
                left:"10%",               
            }
        },
        color:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        range:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        tel:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        datetime_local:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        password:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        email:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        month:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        file:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        radio:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        color:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        week:{
            elementType:'Button',
            elementConfig:{
                function_params:"",
                position:"absolute",
                left:"10%",               
            }
        },
        checkbox:{
            elementType:'Button',
            elementConfig:{
                function_params:"checkbox",
                position:"absolute",
                left:"10%",               
            }
        }
    }

    function addHTMLTags(params) {
        
    }


    return (
       <Auxs position="absolute" top="3%" left="1%">
           <Label for="-/ List of Available tag"> -/ List of Available tag</Label>
           
           
           <ol>
           <li><Button position="absolute" left="10%" onClick={addHTMLTags('button')}>Add Button</Button></li>
           <li><Button position="absolute" left="10%" onClick={addHTMLTags('input')}>Add Input Filed</Button></li>
           <li><Button position="absolute" left="10%" onClick={addHTMLTags('image')}>Add Image</Button></li>
           <li><Button position="absolute" left="10%" onClick={addHTMLTags('meter')}>Add Meter</Button></li>
           </ol>
       </Auxs>
    )
}

export default ControlsToAddHTMLPage
