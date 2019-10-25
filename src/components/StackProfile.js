import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Profile from './Profile';
import EditProfile from './EditProfile';

const StackProfile = createAppContainer(createStackNavigator(
    {
        Profile: {
            screen: Profile
        },
        EditProfile: {
            screen: EditProfile
        }
    },
    {
        initialRouteName: 'Profile',
        headerMode: 'none'
    }
));

export default StackProfile;