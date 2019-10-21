import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const MainStack = createAppContainer(createStackNavigator(
    {
        Login: {
            screen: LoginForm
        },
        Register: {
            screen: RegisterForm
        }
    },
    {
        initialRouteName: 'Login'
    }
));

export default MainStack;