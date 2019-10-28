import {
    INIT_EDIT_PROFILE,
    USERNAME_CHANGE,
    PROFILE_IMAGE_CHANGE,
    SAVE_PROFILE
} from './types';

export const initEditProfile = ({ username, profileImage }) => {
    return {
        type: INIT_EDIT_PROFILE,
        payload: {
            username, 
            profileImage
        }
    }
}

export const inputUsernameChange = (username) => {
    return {
        type: USERNAME_CHANGE,
        payload: username
    }
}

export const imageProfileChange = (photo) => {
    return {
        type: PROFILE_IMAGE_CHANGE,
        payload: photo
    }
}

export const saveProfile = ({ username, profileImage }) => {
    return (dispatch) => {
        dispatch({ type: SAVE_PROFILE })
    }
}