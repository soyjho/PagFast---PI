import CurrencyInput from 'react-native-currency-input';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';

import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Pressable } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';

import { formatNumber } from 'react-native-currency-input';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

const schema = yup.object({
  userInput: yup.string().required("Informe o valor para o Pix")
})

export default function Payment({route}) {

  const navigation = useNavigation();

  const [valor, setValor] = React.useState('');
  const personObj = route.params.selectedPerson

  const { control, handleSubmit, formState: {errors} } = useForm ({
    resolver: yupResolver(schema),
    defaultValues: {
      personObj
    }
  })

  function handleInput(data){
    navigation.navigate('PaymentConfirmation', {
      valorDoPix: data.userInput,
      dadosPessoais: data.personObj
    })
  }
  
  return (
    <View style={styles.container}>

    <Text style={styles.title}>Você vai pagar para:</Text>
    
    <Text style={styles.personName}>{ personObj.label }</Text>
    <View style={styles.personObj}>
    <Text>CPF:  { personObj.cpf }  -  { personObj.banco }</Text>
    <Text>Chave:  { personObj.chave }</Text>
    </View>

    <Text style={styles.inputText}>Valor a pagar</Text>

    <Controller 
    control={control}
    name='userInput'
    render={({field: { onChange, onBlur, value} }) => (
      <CurrencyInput
        placeholder='R$ 00,00'
        style={styles.input}
        value={value}
        onChangeValue={onChange}
        onBlur={onBlur}
        prefix="R$ "
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        onChangeText={() => {
          console.log(value)
        }}
      />
    )}
    />
    {errors.userInput && <Text style={styles.error}>{errors.userInput?.message}</Text>}

    <Pressable 
    style={styles.pressableButton}
    onPress={handleSubmit(handleInput)}
    >
      <MaterialCommunityIcons name="chevron-right" size={30} color="#00FFFF" />
    </Pressable>
    
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fafafa',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
      marginTop: 30
    },
    personObj: {
      marginStart: 14,
      marginEnd: 14,
      opacity: 0.6
    },
    personName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginStart: 14,
      marginEnd: 14,
      marginTop: 14
    },
    inputText: {
      marginStart: 14,
      marginEnd: 14,
      marginTop: 140,
      opacity: 0.6
    },
    input: {
      marginStart: 10,
      marginEnd: 200,
      borderBottomWidth: 1,
      borderBottomColor: '#36454F',
      padding: 8
    },
    pressableButton: {
      marginStart: 200,
      marginEnd: 160,
      marginTop: -28
    },
    error: {
      marginStart: 14,
      marginTop: 10,
      color: 'red'
    }
  });