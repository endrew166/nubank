import React from 'react';
import {styles,Container, Top,Title} from './styles';
import {View , Text, Image} from 'react-native';
import Logo from '../../../assets/Nubank_Logo.png';
import Icon from '@expo/vector-icons/MaterialIcons';
export default function Header(){

    return(
        <Container>
            <Top>
                
                <Image Container= {Container.logo} source={Logo}/>
                <Title>Endrew</Title>
            </Top>
            <Icon name ="keyboard-arrow-down" size={20} color= '#FFF'/>
        </Container>


    );
}