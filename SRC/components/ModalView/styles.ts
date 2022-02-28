import {StyleSheet} from 'react-native';

import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,        
    },
    overlay:{
        backgroundColor: theme.colors.overlay,
        flex:1,
    },
    bar:{
        width: 29,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: 'center', // Fazer um alinhamento partindo dela mesma...
        marginTop: 13,
       
    }
    
   
}); 