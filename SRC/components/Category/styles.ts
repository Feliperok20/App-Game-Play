import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8   
    },
    content:{
        width: 100,
        height: 116,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingVertical: 20 // da um espacamento para que os icones nao fiquem tao colados (espacamento na vertical)
    },
    title:{
        fontFamily: theme.fonts.title700,
        color:theme.colors.heading,
        fontSize: 15,
        marginTop: 15,
    },
    check:{
        position: 'absolute',// serve para fixar a posicao do quadrado do check
        top: 7,
        right:7,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
      
        borderColor: theme.colors.secondary50,
        borderWidth:2,
        borderRadius: 3
    },
    checked:{
        position: 'absolute',
        top: 7,
        right:7,
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 3
    }
    
})