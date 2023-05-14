import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { MaskedTextInput} from "react-native-mask-text";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    username: yup.string().required("Informe seu nome de usuário"),
    password: yup.string().min(4, "A senha deve ter 4 dígitos").required("Informe sua senha")
})

export default function SignIn() {
     const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
     })
     const [input, setInput] = useState('');
     const navigation = useNavigation();

     function handleSignIn(data) {
            navigation.navigate('App2')
        }

 return (
   <View style={styles.container}>
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
            <Text style={styles.title}>Nome</Text>

            <Controller
            control={control}
            name="username"
            render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                placeholder='Nome de usuário'
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
            />
            )} 
            />  
            {errors.username && <Text style={styles.labelErrors}>{errors.username?.message}</Text>}
            
            <Text style={styles.title}>Senha</Text>
            <Controller
            control={control}
            name="password"
            render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                placeholder='Senha'
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType='numeric'
                secureTextEntry={true}
            />
            )} 
            />  
            {errors.password && <Text style={styles.labelErrors}>{errors.password?.message}</Text>}

        <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit(handleSignIn)} //         onPress={( ) => navigation.navigate('App2')} 
        >
        <Text style={styles.buttonText}>Acessar</Text>    
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>    
        </TouchableOpacity>
        
        
        </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ffff'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,   
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#00ffff',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
    },
    labelErrors: {
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8,
    }
})