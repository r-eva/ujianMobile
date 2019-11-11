import firebase from '@firebase/app';
import '@firebase/database';
import _ from 'lodash';
import { 
    EMPTY_POST_LIST,
    FILL_POST_LIST,
    SELECT_POST_PROFILE,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    SELECT_EXPLORE_POST,
} from './types';

export const getListPost = () => {
    return (dispatch) => {
        console.log('Masuk')
        var firebaseDatabase = firebase.database()
       firebaseDatabase.ref(`/posts`)
        .on('value', (snapshot) => {
            console.log(snapshot.val())
            dispatch({
                type: EMPTY_POST_LIST
            })
            _.map(snapshot.val(), async (val, id) => {
                var snapshot = await firebaseDatabase.ref(`/users/${val.userId}`).once('child_added')
                var value = snapshot.val()
                console.log(value)
                dispatch({
                    type: FILL_POST_LIST,
                    payload: { 
                        ...val, 
                        id, 
                        username: value.displayName, 
                        userPhoto: value.photoURL 
                    }
                })
            });
        })   

    }
}

export const selectProfilePost = (post) => {
    console.log('masuk selectProfle post')
    console.log(post)
    return {
        type: SELECT_POST_PROFILE,
        payload: post
    }
}

export const selectExpPost = (selectedPost) => {
    return {
        type: SELECT_EXPLORE_POST,
        payload: selectedPost
    }
}

export const deletePost = (postId) => {
    return (dispatch) => {
        dispatch({ type: DELETE_POST })
        firebase.database().ref(`/posts/${postId}`)
            .remove()
            .then(() => {
                dispatch({
                    type: DELETE_POST_SUCCESS
                })
            })
    }
}

// axios.get('url').then(res => { console.log(res.data)}).catch(err => {})
// try {
//     var res = await axios.get('url')
// } catch(err) {

// }
