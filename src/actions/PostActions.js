import firebase from '@firebase/app';
import '@firebase/database';
import _ from 'lodash';
import { 
    EMPTY_POST_LIST,
    FILL_POST_LIST
} from './types';

export const getListPost = () => {
    return (dispatch) => {
        console.log('Masuk')
       firebase.database().ref(`/posts`)
        .on('value', (snapshot) => {
            console.log(snapshot.val())
            dispatch({
                type: EMPTY_POST_LIST
            })
            _.map(snapshot.val(), async (val, id) => {
                var snapshot = await firebase.database().ref(`/users/${val.userId}`).once('child_added')
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

// axios.get('url').then(res => { console.log(res.data)}).catch(err => {})
// try {
//     var res = await axios.get('url')
// } catch(err) {

// }
