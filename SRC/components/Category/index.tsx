import React from "react";
import{ View, Text } from 'react-native' // ativa a rolagem!!
import { SvgProps } from 'react-native-svg'
import {LinearGradient} from 'expo-linear-gradient';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler' // esse caras respeita o efeito do botao de cada plataforma IOS/ANDROID

import {styles} from './styles';
import { theme } from '../../global/styles/theme';
import { categories } from "../../utils/categories";

type Props = RectButtonProps & {
    title: string;
    icon:React.FC<SvgProps>
    hasCheckBox?: boolean;//
    checked?: boolean; // isso seria aquele quadradinho que aparece quando voce seleciona o tipo de categoria
}

export function Category({
title,
icon: Icon, //eu coloco a propriedade como minusculo e depois converto  ela para maiusculo porque no react todo componente e miusculo 
checked = false,
hasCheckBox = false, 
...rest // resto referente ao rectButton
}:Props ){
    const{
        secondary40, 
        secondary50, 
        secondary70,
        secondary85
    } = theme.colors;
    
    return(
        <RectButton {...rest}>
           <LinearGradient
                style = {styles.container}
                 colors={[secondary50, secondary70]}
                 >
                <LinearGradient 
                style={[styles.content, {opacity: checked ? 1 : 0.5}]}
                colors={[ checked ? secondary85 : secondary50, secondary40 ]}
                >
                    {
                        hasCheckBox &&
                        <View style={
                            checked ? styles.checked: styles.check}
                        />
                    }
                    <Icon 
                        width={48}
                        height={48}
                    /> 
                    <Text style={styles.title}>
                        {title}
                    </Text>
                 </LinearGradient>
            </LinearGradient>
        </RectButton>
    );
}