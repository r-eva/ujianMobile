import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ 
                        text: this.props.user.displayName.toLowerCase().replace(/\s/g, ''), 
                        style: { color: 'black', fontSize: 18 } 
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
                <Text>Ini Page Profile</Text>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user
    }
}

export default connect(mapStateToProps)(Profile);