import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Header, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { initEditProfile } from '../actions';

class Profile extends Component {
    onBtnEditProfilePress = () => {
        this.props.initEditProfile({
            username: this.props.user.displayName,
            profileImage: this.props.user.photoURL
        })
        this.props.navigation.navigate('EditProfile')
    }

    render() {
        return (
            <View>
                <Header
                    leftComponent={{ 
                        text: this.props.user.displayName.toLowerCase().replace(/\s/g, ''), 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftContainerStyle={{ flex: 3 }}
                    rightComponent={{ 
                        icon: 'menu', 
                        color: 'black',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
                <ListItem
                    leftAvatar={{
                        source: { uri: this.props.user.photoURL },
                        size: 'large'
                    }}
                    title={this.props.user.displayName}
                    subtitle={'Instagrin User'}
                />
                <Button 
                    title="Edit Profile"
                    containerStyle={{ 
                        marginVertical: 15, 
                        marginHorizontal: 15, 
                        borderWidth: 0.5,
                        borderColor: 'gray'
                    }}
                    buttonStyle={{ borderColor: 'gray' }}
                    titleStyle={{ color: 'black' }}
                    type='outline'
                    onPress={this.onBtnEditProfilePress}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user ? auth.user : { displayName: '', photoURL: '' }
    }
}

export default connect(mapStateToProps, { initEditProfile })(Profile);