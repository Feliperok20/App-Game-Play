import { ImageBackground, StyleSheet } from "react-native";// import o StyleSheet para que seja possvel criar um objeto que vai conter as regeras de estilisacao
import {theme} from '../../global/styles/theme'

export const Styles = StyleSheet.create({//exportando um objeto de estilizacao
    container: { //crio uma propriedade  container 
        flex:1, // flex box e utilizado pelo react native para posicionar o elemento 1= toda a tela
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: '100%',
        height: 360,
    },

    content:{
        marginTop: -40,
        paddingHorizontal: 50 // serve para colocar uma margem nas laterais no botao do discord
        

    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40, 
        marginBottom: 16,
        fontFamily:theme.fonts.title700,
        lineHeight: 40 //altura entre as linhas...
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        marginBottom: 64,
        textAlign: 'center',
        fontFamily: theme.fonts.text500,
        lineHeight: 25,
        
        
    }

});