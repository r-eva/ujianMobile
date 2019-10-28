import {
    INIT_EDIT_PROFILE,
    USERNAME_CHANGE,
    PROFILE_IMAGE_CHANGE,
    SAVE_PROFILE
} from '../actions/types';

const INITIAL_STATE = {
    profileImage: '',
    username: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_EDIT_PROFILE :
            return { 
                ...INITIAL_STATE, 
                profileImage: action.payload.profileImage, 
                username: action.payload.username
            }
        case USERNAME_CHANGE :
            return { ...state, username: action.payload }
        case PROFILE_IMAGE_CHANGE :
            return { ...state, profileImage: action.payload }
        case SAVE_PROFILE :
            return { ...state, loading: true }
        default :
            return state;
    }
};