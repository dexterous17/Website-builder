let actionpayload = null;
let key = null;
const initialState = {
    Tag:[{}]
}

const counterReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADDTAG':
            actionpayload = action.payload;
            key = Math.random()
            return{
                ...state,
                Tag: state.Tag.concat({key,actionpayload})
            }
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

export default counterReducer;