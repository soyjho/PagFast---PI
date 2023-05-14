import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Actions() {
    const navigation = useNavigation();
 return (
   <ScrollView style={styles.container} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        
        <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => navigation.navigate('Pix')}
        >
            <View style={styles.areaButton}>
            <MaterialCommunityIcons name="rhombus-split" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <FontAwesome5 name="hand-holding-usd" size={26} color='#000' />
            </View>
            <Text style={styles.labelButton}>Empréstimo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
            <MaterialCommunityIcons name="bank-transfer" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
            <MaterialCommunityIcons name="cash-plus" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Depositar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
            <Feather name="smartphone" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Recarga</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
            <MaterialCommunityIcons name="signal" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Investir</Text>
        </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
    },
})