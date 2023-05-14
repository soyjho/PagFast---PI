import CurrencyInput from 'react-native-currency-input';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Pressable } from 'react-native';
import moment from 'moment/moment';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { NumberFormat } from 'react-native-intl';


export default function PaymentConfirmation({route}) {

  const navigation = useNavigation();

  const valorDoPix = route.params.valorDoPix;
  console.log(valorDoPix)

  // const [ valueFormattedWithoutSymbol ] = formatCurrency({ valorDoPix: valorDoPix, code: "BRL" })
  const dadosPessoais = route.params.dadosPessoais;
  const dataAtual = moment().utcOffset('-03:00').format('DD/MM/YYYY')
  
  return (
    <View style={styles.container}>

    <Text style={styles.title}>Confirme seu pagamento:</Text>
    
    <Text style={styles.valorPagar}>Valor a pagar</Text>

    <Text style={styles.valorDoPix}>R$ {valorDoPix}</Text>

    <Text style={styles.dataPagamento}>Data do pagamento</Text>
    <Text style={styles.dataAtual}>{dataAtual}</Text>
    <Text style={styles.separador}></Text>

    <Text style={styles.paraText}>Para</Text>
    <Text style={styles.para}>{dadosPessoais.label}</Text>

    <Text style={styles.cpfText}>CPF</Text>
    <Text style={styles.cpf}>{dadosPessoais.cpf}</Text>

    <Text style={styles.chaveText}>Chave</Text>
    <Text style={styles.chave}>{dadosPessoais.chave}</Text>

    <Text style={styles.bancoText}>Instituição</Text>
    <Text style={styles.banco}>{dadosPessoais.banco}</Text>

    <Pressable 
    onPress={() => {
      navigation.navigate('PixEnviado', {
        dadosTransacao: dadosPessoais,
        valorTransacao: valorDoPix
      })
    }}
    >
      <Text style={styles.botaoConfirmar}>Confirmar</Text>
      <MaterialCommunityIcons style={styles.icone} name="chevron-double-right" size={30} color="#00FFFF" />
    </Pressable>

    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fafafa'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
      marginTop: 30
    },
    valorPagar: {
      marginStart: 14,
      marginEnd: 14,
      marginTop: 30,
      opacity: 0.6
    },
    valorDoPix: {
      marginStart: 14,
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 16
    },
    dataPagamento: {
      marginStart: 14,
      marginEnd: 14,
      marginTop: 20,
      opacity: 0.6
    },
    dataAtual: {
      marginStart: 14,
      marginTop: 10,
      fontWeight: 'bold'
    },
    separador: {
      marginStart: 14,
      marginEnd: 60,
      borderBottomWidth: 0.5
    },
    paraText: {
      marginStart: 14,
      marginTop: 10,
      opacity: 0.6
    },
    para: {
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
    botaoConfirmar: {
      fontSize: 18,
      marginTop: 10,
      marginStart: 250,
      fontWeight: 'bold'
    },
    icone: {
      marginStart: 335,
      marginTop: -25
    }
  });