const initialState = {
    Tags:[]
}

const counterReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADDTAG':
            return{
                ...state,
                Tags: state.Tags.concat(action.payload)
            }
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

export default counterReducer;