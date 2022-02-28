import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { theme } from '../global/styles/theme';

import {Home} from '../screens/Home';

import {AppointmentDetails} from '../screens/AppointmentDetails';
import {AppointmentCreate} from '../screens/AppointmentCreate';


const { Navigator, Screen } = createNativeStackNavigator(); //Desustruturou


export function AppRoutes() {
    return( //dentro do navigator eu declaro a screen que eu vou usar e dentro desta o nome da tela e o componente.
       
        <Navigator
            
            screenOptions={{  
                headerShown: false, 
                headerStyle: { backgroundColor: theme.colors.secondary100 }                      
                //cardStyle:{
                  //  backgroundColor: 'transparent', //deixa o fundo da rota transparente
                  
                //}
            }}
        >
        <Screen
            name="Home"
            component={Home}
            /> 
        <Screen
            name="AppointmentDetails"
            component={AppointmentDetails}
        /> 
        <Screen
            name="AppointmentCreate"
            component={AppointmentCreate}
        /> 
         
        </Navigator>       
    );
} 