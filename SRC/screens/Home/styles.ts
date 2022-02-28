
import { StyleSheet } from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';// tive que instalar a biblioteca yarn add react-native-iphone-x-helper, ajuda a contar o expa;amento do cabecalho a partir da franga do iphone.

export const styles = StyleSheet.create({
    container: {
        flex:1,      
    },
    header:{ //Cabecalho da tela home 
        width: '100%', //ocupa 100% da tela
        paddingHorizontal:24,//espassamendo interno horizontal 
        flexDirection: 'row', //row = fila
        justifyContent:'space-between', // ocupe os espacos
        marginTop: getStatusBarHeight() + 26, // margem superior
        marginBottom: 42, // margem inferior 
    },
    content:{
        marginTop:42,
        
    },
    matches: {
        marginTop: 24,
        marginLeft:24,
        
    }
}); 