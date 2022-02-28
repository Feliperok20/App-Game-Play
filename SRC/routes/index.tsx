import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import { Signin } from '../screens/signin';
import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';

export function Routes (){
    const { user } = useAuth();

    return( // tem que ter esse navigator countainer para que ele deixa salvo qual foi a ultima rota feita para que vc possa voltar
        <NavigationContainer> 
            { user.id ? <AppRoutes/> : <Signin/>} 
        </NavigationContainer>
    )
}