import {StyleSheet} from 'react-native';
import styled from 'styled-components';


export const Container = styled.View
`align-items: center;
padding-top: 40px;
padding-horizontal:0;
padding-bottom:0;
`

export const Top = styled.View
`flex-direction:row;
align-items:center;
margin-bottom:18px;
`
export const Title = styled.Text
`font-size:18px;    
color:#FFF;
font-weight:bold;
margin-left:8px; 
`

export default styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal:0,
        paddingBottom:0,
    },
    top:{
        flexDirection:'row',
        alignItems:"center",
        marginBottom:18,
    }
    ,

    title:{
        fontSize:18,    
        color:"#FFF",
        fontWeight:'bold',
        marginLeft:8,    
    }
});