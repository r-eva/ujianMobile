import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';

class EditProfile extends Component {
    render() {
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{ 
                        icon: 'clear', 
                        color: 'black',
                        onPress: () => this.props.navigation.goBack() 
                    }}
                    centerComponent={{ 
                        text: 'Edit Profile', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    rightComponent={{ 
                        icon: 'done', 
                        color: '#4388d6'
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user
    }
}

export default connect(mapStateToProps)(EditProfile);