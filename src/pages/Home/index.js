import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

const list = [
  {
    id: 1,
    label: 'Conta de luz',
    value: '270,85',
    date: '15/11/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix João',
    value: '300,50',
    date: '10/11/2022',
    type: 1 // receita / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '2.570,67',
    date: '17/11/2022',
    type: 1 // receita / entradas
  },
  {
    id: 4,
    label: 'Amazon Marketplace',
    value: '181,73',
    date: '13/11/2022',
    type: 0 // Despesa,
  },
  // {
  //   id: 5,
  //   label: 'Ifood',
  //   value: '38,99',
  //   date: '10/11/2022',
  //   type: 0 // Despesa
  // },
  // {
  //   id: 6,
  //   label: 'Mini Mercado',
  //   value: '23,60',
  //   date: '08/11/2022',
  //   type: 0 // Despesa
  // },
  // {
  //   id: 7,
  //   label: 'Drogaria Sao Paulo',
  //   value: '192,78',
  //   date: '08/11/2022',
  //   type: 0 // Despesa
  // },
  // {
  //   id: 8,
  //   label: 'Aguia Shoes',
  //   value: '72,59',
  //   date: '07/11/2022',
  //   type: 0 // Despesa
  // },
]

export default function Home({route}) {
  console.log(route)

  return (
    <View style={styles.container}>
    <Header name="Olá!"/>

    <Balance saldo='2.379,60' gastos='-491,57' /> 

    <Actions/>

    <Text style={styles.title}>Últimas movimentações</Text>
    
    <FlatList 
      style={styles.list} 
      data={list} 
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Movements data={item} /> }
      />
    
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
    },
    list: {
      marginStart: 14,
      marginEnd: 14,
    },
});