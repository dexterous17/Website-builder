let actionpayload = null;
let key = null;
let td = [];
let NewTag = [];

const initialState = {
    Trkey:1,
    TagForButton:[
        {
            id:1,
            Type:"Button",
            Label:"Add Content"
        },
        {
            id:2,
            Type:"Button"
        },
        {
            id:3,
            Type:"Button"
        },
        {
            id:4,
            Type:"Button"
        },
        {
            id:5,
            Type:"Button"
        },
        {
            id:6,
            Type:"Button"
        },
        {
            id:7,
            Type:"Button"
        },
        {
            id:8,
            Type:"Button"
        },
        {
            id:9,
            Type:"Button"
        },
        {
            id:10,
            Type:"Button"
        }
    ],
    Tag:[
        {
            key:0,
            actionpayload:"Tr-td",
            td:["1","2","3","4"]
        }
    ]

}

const counterReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADDTAG':
            actionpayload = action.payload;
            key = state.Trkey++;
            td = []
            return{
                ...state,
                Tag: state.Tag.concat({key,actionpayload,td})
            }
        case 'ADDTDTOTR':
            actionpayload = action.payload; 
            const elementIndex = state.Tag.findIndex(element => element.key === action.payload.id)
            const actionpayloadvalue = actionpayload.value
            NewTag = state.Tag[elementIndex].td.concat({actionpayloadvalue})
            return {
                ...state,
                Tag: state.Tag
            };
        
        default:
            return state;
    }
}

export default counterReducer;