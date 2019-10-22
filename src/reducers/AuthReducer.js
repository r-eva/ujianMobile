import { 
    LOGIN_USER_SUCCESS,
    START_REGISTER,
    REGISTER_FAILED
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    loadingRegister: false,
    errorRegister: '',
    errorLogin: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_FAILED :
            return { ...state, loadingRegister: false, errorRegister: action.payload }
        case START_REGISTER :
            return { ...state, loadingRegister: true, errorRegister: '' }
        case LOGIN_USER_SUCCESS :
            return { ...INITIAL_STATE, user: action.payload };
        default :
            return state;
    }
};
