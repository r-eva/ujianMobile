import { 
    FILL_POST_LIST,
    EMPTY_POST_LIST,
    SELECT_POST_PROFILE
} from '../actions/types';

const INITIAL_STATE = {
    postList: [],
    selectedPostDetailProfile: null
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPTY_POST_LIST :
            return { ...state, postList: [] }
        case FILL_POST_LIST :
            return { ...state, postList: [...state.postList, action.payload] }
        case SELECT_POST_PROFILE :
            return { ...state, selectedPostDetailProfile: action.payload }
        default :
            return state;
    }
}