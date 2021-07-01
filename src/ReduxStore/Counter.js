let actionpayload = null;
let key = null;
let td = [];
let NewTag = [];

const initialState = {
    Trkey:1,
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