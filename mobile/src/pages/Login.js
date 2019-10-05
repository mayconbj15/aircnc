import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png'

export default function Login(){
    return ( 
        <View style={styles.container}>
            <Image source={logo}></Image>
            
            <View style={ styles.form }>
                <Text style={styles.label}> E-mail aí oooh zé cachaça </Text>
                <TextInput
                    style={ style.input }
                    placeholder="Seu e-mail garai"
                    placeholderTextColor="#"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={ false }
                />
                
                <Text style={styles.label}> Diz aí os goró que tu curte </Text>
                <TextInput
                    style={ style.input }
                    placeholder="Birinite"
                    placeholderTextColor="#"
                    keyboardType="email-address"
                    autoCapitalize="words"
                    autoCorrect={ false }
                />

                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.buttonText }>Encontrar o butecoo</Text>
                </TouchableOpacity>
                
            </View>                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})

