import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

class Home extends Component {
    render() {
        return(
            <View>
                <Header
                    leftComponent={{ 
                        text: 'Instagrin', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftContainerStyle={{ flex: 3 }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25,
                        elevation: 2
                    }}
                />
            </View>
        )
    }
}

export default Home;