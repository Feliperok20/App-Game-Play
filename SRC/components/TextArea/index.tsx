import React from 'react';
import { TextInput, TextInputProps } from 'react-native';


import {styles} from './styles'
import {theme} from '../../global/styles/theme'


export function TextArea ({...rest}:TextInputProps ){
    const colorHolder =  theme.colors.highlight
return (
    <TextInput  
    
    placeholder='Escreva o que você quiser...'
    placeholderTextColor= {colorHolder}
    
    style={styles.container}
    
    {...rest}
    
    />

   
);

}