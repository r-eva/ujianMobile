import firebase from '@firebase/app';
import '@firebase/auth';

import { 
    LOGIN_USER_SUCCESS,
    START_REGISTER,
    REGISTER_FAILED
} from './types';

export const onUserRegister = ({email,username,password,conPassword}) => {
    return (dispatch) => {
        dispatch({ type: START_REGISTER })
        if(email !== '' 
            && username !== '' 
            && password !== '' 
            && conPassword !== ''
        ) {
            if(password === conPassword) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                        console.log(user)
                    }).catch((err) => {
                        console.log(err)
                        dispatch({ 
                            type: REGISTER_FAILED, 
                            payload: err.message 
                        });
                    })
            } else {
                dispatch({ 
                    type: REGISTER_FAILED, 
                    payload: 'Confirm Password and Password Must Equal'
                })
            }
        } else {
            dispatch({ 
                type: REGISTER_FAILED, 
                payload: 'Please Fill All The Inputs Above'
            })
        }
    }
}