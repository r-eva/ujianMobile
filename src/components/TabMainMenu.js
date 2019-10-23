import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import Home from './Home';

export default createAppContainer(createBottomTabNavigator(
  {
    Home: Home,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        }
        // You can return any component that you like here!
        return <Icon name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showLabel: false
    },
  }
));