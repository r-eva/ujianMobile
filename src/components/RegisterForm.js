import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class RegisterForm extends Component {
    state = { passHidden: true }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Animatable.Text animation={'fadeInDown'} duration={2000}>
                    <Text h3>Welcome</Text>
                </Animatable.Text>
                <View style={styles.inputStyle}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='email'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        rightIcon= {
                            <Icon
                                name={this.state.passHidden ? 'visibility-off' : 'visibility' }
                                size={24}
                                color={this.state.passHidden ? '#bfc3c9' : 'black' }
                                onPress={() => this.setState({ passHidden: !this.state.passHidden })}
                            />
                        }
                        secureTextEntry={this.state.passHidden}
                    />
                </View>
                <Button
                    title="Register"
                    containerStyle={{ width: '95%', marginBottom: 10 }}
                    buttonStyle={{ backgroundColor: 'black' }}
                />
                <Button
                    title="Back to Login"
                    containerStyle={{ width: '95%' }}
                    buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                    titleStyle={{ color: 'black' }}
                    type="outline"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    },
    inputStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    }
})

export default RegisterForm;