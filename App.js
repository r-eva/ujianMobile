import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class App extends Component {
  render() {
    return (
      <View>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: 'black' }}
          centerComponent={{ text: 'MY TITLE', style: { color: 'black' } }}
          rightComponent={{ icon: 'home', color: 'black' }}
          containerStyle={{
              backgroundColor: '#fff',
              justifyContent: 'space-around',
              marginTop: Platform.OS === 'ios' ? 0 : - 25
          }}
        />
        <Animatable.View animation="bounce">
          <Icon
            reverse
            name='md-american-football'
            type='ionicon'
            color='#517fa4'
            size={50}
          />
        </Animatable.View>
      </View>
    )
  }
}

export default App;