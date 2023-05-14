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

import moment from 'moment';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function PixEnviado({route}) {

  const navigation = useNavigation();

  const valorTransacao = route.params.valorTransacao
  const dadosTransacao = route.params.dadosTransacao
  const dataHora = moment().utcOffset('-03:00').format('DD/MM/YYYY - HH:mm')

  console.log(valorTransacao);
  console.log(dadosTransacao)
  
  return (
    <View style={styles.container}>
    
    <View>
    <MaterialCommunityIcons style={styles.icone} name="check-circle" size={18} color="#00FFFF" />
    <Text style={styles.title}>Pronto! Seu pagamento foi enviado!</Text>
    </View>

    <Text style={styles.valorPago}>Valor pago</Text>
    <Text style={styles.valorTransacao}>R$ {valorTransacao}</Text>
    <Text style={styles.paraNome}>Para</Text>
    <Text style={styles.nome}>{dadosTransacao.label}</Text>
    
    <Text style={styles.cpfText}>CPF</Text>
    <Text style={styles.cpf}>{dadosTransacao.cpf}</Text>

    <Text style={styles.chaveText}>Chave</Text>
    <Text style={styles.chave}>{dadosTransacao.cpf}</Text>

    <Text style={styles.bancoText}>Instituição</Text>
    <Text style={styles.chave}>{dadosTransacao.banco}</Text>

    <Text style={styles.separador}></Text>

    <Text style={styles.dataHoraText}>Data e hora da transação</Text>
    <Text style={styles.dataHora}>{dataHora}</Text>

     <Pressable 
    onPress={() => {
        navigation.navigate('Home', {
            saldo: valorTransacao
          })
    }}
    >
      <MaterialCommunityIcons style={styles.iconeClose} name="close" size={30} color="#00FFFF" />
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
      marginStart: 29,
      marginTop: -22
    },
    personName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginStart: 14,
      marginEnd: 14,
      marginTop: 14
    },
    icone: {
      marginStart: 7,
      marginTop: 22
    },
    valorPago: {
      marginStart: 14,
      marginEnd: 14,
      marginTop: 30,
      opacity: 0.6
    },
    valorTransacao: {
      marginStart: 14,
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 16
    },
    paraNome: {
      marginStart: 14,
      marginTop: 10,
      opacity: 0.6
    },
    nome: {
      marginStart: 14,
      fontWeight: 'bold',
      marginTop: 10,
      fontSize: 15
    },
    cpfText: {
      marginStart: 14,
      marginTop: 10,
      opacity: 0.6
    },
    cpf: {
      marginStart: 14,
      fontWeight: 'bold',
      marginTop: 10,
      fontSize: 15
    },
    chaveText: {
      marginStart: 14,
      marginTop: 10,
      opacity: 0.6
    },
    chave: {
      marginStart: 14,
      fontWeight: 'bold',
      marginTop: 10,
      fontSize: 15
    },
    bancoText: {
      marginStart: 14,
      marginTop: 10,
      opacity: 0.6
    },
    banco: {
      marginStart: 14,
      fontWeight: 'bold',
      marginTop: 10,
      fontSize: 15
    },
    separador: {
      marginStart: 14,
      marginEnd: 60,
      borderBottomWidth: 0.5
    },
    dataHoraText: {
      marginStart: 14,
      marginTop: 10,
      opacity: 0.6
    },
    dataHora: {
      marginStart: 14,
      fontWeight: 'bold',
      marginTop: 10,
      fontSize: 15
    },
    iconeClose: {
        marginStart: 335
    }
  });