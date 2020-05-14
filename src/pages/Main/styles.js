import {StyleSheet} from 'react-native';
import styled from 'styled-components';

export const Container = styled.View
` flex:1px ;
background-color: #8b10ae;
`
export const Content = styled.View
`flex:1px;
max-height:400px;
justify-content:center;
`
export const  Card = styled.View
`flex:1px;
background-color:#FFF;
border-radius: 4px;
margin-horizontal: 20px;
margin-vertical: 0;
`
export const  CardHeader = styled.View
`flex-direction: row;
justify-content:space-between;
align-items:center;
padding:30px;

`
export const CardContent = styled.View
` flex:1px;
padding-vertical:0;
padding-horizontal:30px;
justify-content:center;
`
export const CardFooter = styled.View
`padding: 30px ;
background-color: #eee;
border-radius: 4px;
`

export const Title = styled.Text
`fontSize:13px;
color:#999;
`
export const Description = styled.Text
`fontSize:32px;
margin-top:3px;
color:#333;
`
export const Anottation= styled.Text
`fontSize:13px;
color:#333;
`

   
