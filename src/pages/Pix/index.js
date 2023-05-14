import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';
import PixMovements from '../components/PixMovements';
import Payment from '../Payment';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

const contactsList = [
  {
    id: 1,
    label: 'Antonio Santos',
    details: 'BCO BRADESCO S.A - Celular: +55 (11) 99999-9999',
    chave: '+55 (11) 99999-9999',
    banco: 'BCO BRADESCO S.A',
    cpf: '***.999.999-**'
  },
  {
    id: 2,
    label: 'Barbara Domingues',
    details: 'NU PAGAMENTOS - CPF: ***.999.999-**',
    chave: '***.999.999-**',
    banco: 'NU PAGAMENTOS',
    cpf: '***.999.999-**'
  },
  {
    id: 3,
    label: 'Bete Lafaiette',
    details: 'BCO ITAU UNIBANCO - CPF: ***.999.999-**',
    chave: '***.999.999-**',
    banco: 'BCO ITAU UNIBANCO',
    cpf: '***.999.999-**'
  },
  {
    id: 4,
    label: 'Carolina dos Reis',
    details: 'BCO DO BRASIL S.A - E-mail: carol@email.com',
    chave: 'carol@email.com',
    banco: 'BCO DO BRASIL S.A',
    cpf: '***.999.999-**'
  },
  {
    id: 5,
    label: 'Daniel França',
    details: 'BCO SANTANDER BRASIL - Celular: +55 (11) 99999-9999',
    chave: '+55 (11) 99999-9999',
    banco: 'BCO SANTANDER BRASIL',
    cpf: '***.999.999-**'
  },
  {
    id: 6,
    label: 'Débora Cardoso',
    details: 'NU PAGAMENTOS - CPF: ***.999.999-**',
    chave: '***.999.999-**',
    banco: 'NU PAGAMENTOS',
    cpf: '***.999.999-**'
  }
]

export default function Pix() {

  return (
    <View style={styles.container}>

    <Text style={styles.title}>Seus contatos</Text>
    
    <FlatList 
      style={styles.contactsList} 
      data={contactsList}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <PixMovements data={item} /> }
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
    contactsList: {
      marginStart: 14,
      marginEnd: 14,
    },
});