let actionpayload = null;
let key = null;
let td = [];
let NewTag = [];
let NewKeyForTd = 0;

const initialState = {
    Trkey:1,
    MainkeyForTd:1,
    TagForButton:[
        {
            id:"Content-1",
            Type:"Button",
            Label:"Add Content"
        },
        {
            id:"Button-2",
            Type:"Button",
            Label:"Add Button"
        },
        {
            id:3,
            Type:"Button",
            Label:"Add Divider"
        },
        {
            id:4,
            Type:"Button",
            Label:"Add Heading"
        },
        {
            id:5,
            Type:"Button",
            Label:"Add HTML"
        },
        {
            id:6,
            Type:"Button",
            Label:"Add IMAGE"
        },
        {
            id:7,
            Type:"Button",
            Label:"Add Menu"
        },
        {
            id:8,
            Type:"Button",
            Label:"Add Social"
        },
        {
            id:9,
            Type:"Button",
            Label:"Add Text"
        },
        {
            id:10,
            Type:"Button",
            Label:"Add Video"
        }
    ],
    Tag:[
        {
            key:0,
            actionpayload:"Tr-td",
            keyForTd:0,
            td:["1","2","3","4"]
        }
    ]

}

const counterReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADDTAG':
            actionpayload = action.payload;
            key = state.Trkey++;
            NewKeyForTd = state.MainkeyForTd++;
            td = NewTag;
            return{
                ...state,
                Tag: state.Tag.concat({key,actionpayload,NewKeyForTd,td})
            }
        case 'ADDTDTOTR':
            actionpayload = action.payload; 
            const elementIndex = state.Tag.findIndex(element => element.key === action.payload.id)
            const actionpayloadvalue = actionpayload.value
            NewTag = state.Tag[elementIndex].td.concat({actionpayloadvalue})
            return {
                ...state,
                Tag: NewTag
            };
        
        default:
            return state;
    }
}

export default counterReducer;