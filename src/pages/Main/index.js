import React from 'react';
import {View, Text} from 'react-native';
import {Container,Content,Card,CardHeader,CardContent,CardFooter,Title,Description ,Anottation,styles} from './styles'
import Header from '../../components/Header';
import Tab from '../../components/Tab'
import Icon from '@expo/vector-icons/MaterialIcons';
export default function Main(){
    return(
        <Container>
            <Header/>
            <Content>
                <Card>
                    
                   
                    < CardHeader>
                            <Icon name="attach-money" size={28} color="#666"/>
                            <Icon name="visiblity-off" size={28} color="#666"/>

                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponivel</Title>
                        <Description>R$ 000.000,99</Description>
                    </CardContent>
                    
                    
                    <CardFooter>
                       <Anottation>
                           Transferência de R$00,99 recebida de Dan hoje as 23:59
                        </Anottation> 
                    </CardFooter>
                </Card>
            </Content>
            <Tab/>
        </Container>
    )
}