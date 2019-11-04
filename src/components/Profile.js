import React, { Component } from 'react';
import { View, Text, Platform, Image, ScrollView } from 'react-native';
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

    renderListPost = () => {
        var i = 2;
        return this.props.listPost.map((item, index) => {
            if((index + 1) !== i ) {
                return (
                    <View 
                        style={{ width: '33%', marginVertical: 1 }}
                    >
                        <Image source={{uri: item.imageURL }} style={{height: 125, width: '100%' }}/>
                    </View>
                )
            }
            i += 3;
            return (
                <View 
                    style={{ width: '33%', marginVertical: 1, marginHorizontal: '0.5%' }}
                >
                    <Image source={{uri: item.imageURL }} style={{height: 125, width: '100%' }}/>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
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
                        marginTop: Platform.OS === 'ios' ? 0 : - 25,
                        borderBottomWidth: 0.5
                    }}
                />
                <ScrollView>
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
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        flex: 1
                        // justifyContent: 'space-between'
                    }}>
                        {this.renderListPost()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = ({ auth, post }) => {
    var user = auth.user ? auth.user : { uid: '', displayName: '', photoURL: '' }
    var listPost = post.postList.filter((item,index) => {
        return user.uid === item.userId
    })
    return {
        user,
        listPost
    }
}

export default connect(mapStateToProps, { initEditProfile })(Profile);