import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'
import Header from '../../components/Header';
import Tab from '../../components/Tab'
import Icon from '@expo/vector-icons/MaterialIcons';
export default function Main(){
    return(
        <View style = {styles.container}>
            <Header/>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                            <Icon name="attach-money" size={28} color="#666"/>
                            <Icon name="visiblity-off" size={28} color="#666"/>

                    </View>
                    <View style={styles.cardContent}>
                        <Text style ={styles.title}>Saldo disponivel</Text>
                        <Text style = {styles.description}>R$ 000.000,99</Text>
                    </View>
                    
                    
                    <View style={styles.cardFooter}>
                       <Text style ={styles.anottation}>
                           Transferência de R$00,99 recebida de Dan hoje as 23:59
                        </Text> 
                    </View>
                </View>
            </View>
            <Tab/>
        </View>
    )
}