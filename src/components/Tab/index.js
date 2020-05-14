import React from 'react';
import {Container,Tabcontainer,TabItem,Tabtext,styles} from './styles';
import { View, Text, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
export default function Tab() {
    return (
        <Container>
            <ScrollView horizontal= {true}
                showsHorizontalScrollIndicator={false}
                Container ={Tabcontainer}
            >
                <TabItem>
                    <Icon name='person-add' size={24} color='#FFF' />
                    <Tabtext>Indicar amigos</Tabtext>
                </TabItem>

                <TabItem>
                    <Icon name='chat-bubble-outline' size={24} color='#FFF' />
                    <Tabtext>Cobrar</Tabtext>
                </TabItem>

                <TabItem>
                    <Icon name='arrow-downward' size={24} color='#FFF' />
                    <Tabtext>Depositar</Tabtext>
                </TabItem>

                <TabItem>
                    <Icon name='arrow-upward' size={24} color='#FFF' />
                    <Tabtext>Transferir</Tabtext>

                </TabItem>
                <TabItem>
                    <Icon name='lock' size={24} color='#FFF' />
                    <Tabtext>Bloquear Cartão</Tabtext>

                </TabItem>
</ScrollView>
        </Container>
    )
}