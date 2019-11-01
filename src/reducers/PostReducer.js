import { 
    FILL_POST_LIST,
    EMPTY_POST_LIST
} from '../actions/types';

const INITIAL_STATE = {
    postList: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPTY_POST_LIST :
            return { ...state, postList: [] }
        case FILL_POST_LIST :
            return { ...state, postList: [...state.postList, action.payload] }
        default :
            return state;
    }
}