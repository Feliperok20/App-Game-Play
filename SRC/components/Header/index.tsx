import React, {ReactNode} from 'react';
import { LinearGradient} from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
    View, Text 
} from 'react-native';
import { Background } from '../../components/Background';
import {theme} from '../../global/styles/theme'
import {styles} from './style'
import { useNavigation } from '@react-navigation/native';

type Props = {
title: string;
action?: ReactNode; //Quero dizer que essa acão será um "nó" do React, assim eu posso passar dinamicamente o que eu quero inserir no header!!!

}

export function Header({title, action}: Props){
const {secondary100, secondary40, heading} = theme.colors;
const navigation = useNavigation();

function handleGoBack(){
    navigation.goBack();

}

    return (
        <LinearGradient
        style={styles.container}
        colors={[secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                name="arrow-left"
                size={24}
                color={heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                { title }
            </Text>

            {
                action ?
                    <View>
                        {action}
                    </View> 
                    : 
                    <View style={{width:24}}/>
            }

        </LinearGradient>
    )
} 