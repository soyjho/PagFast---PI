import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { MaskedTextInput} from "react-native-mask-text";

export default function Welcome() {
    const navigation = useNavigation();

 return (
   <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image
                animation='flipInY'
                source={require('../../assets/logo.jpg')}
                style={{ width: '100%' }}
                resizeMode="contain"
            />
        </View>

        <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
            <Text style={styles.title}>Comece a controlar melhor sua vida financeira com o PagFast.</Text>
            <Text style={styles.text}>Faça o login para começar</Text>
        
        <TouchableOpacity 
        style={styles.button}
        onPress={ ( ) => navigation.navigate('SignIn')}
        >
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFFF'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#00FFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#00ffff',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
})