import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({ //exportando o objeto de estilizacao do react native
container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
},
title:{
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.text500
},
iconWrapper: {
    width: 56, //largura
    height: 56, //altura
    justifyContent: 'center', //Centralisa na altura.
    alignItems: 'center',//Centralisa na largura.
    borderRightWidth: 1,//borda da letral direita apenas...
    borderColor: theme.colors.line // cor da borda..
},
icon:{
    width: 24,
    height: 18
}

});