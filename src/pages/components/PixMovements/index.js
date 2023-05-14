import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function PixMovements( {data} ) {
    const navigation = useNavigation();
 return (
   <TouchableOpacity 
   style={styles.container}
   onPress={() => navigation.navigate('Payment', {
        selectedPerson: data,
   })}
   >
        <Text style={styles.label}>{data.label}</Text>

        <View style={styles.content}>
            <Text style={styles.details}>{data.details}</Text>
        </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    label: {
        fontSize: 16
    }
})