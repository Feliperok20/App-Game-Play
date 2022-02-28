import React from 'react';
import {StatusBar , LogBox} from 'react-native'
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine']);

import {Background} from './SRC/components/Background';



import {AuthProvider} from './SRC/hooks/auth'
import {Routes} from './SRC/routes';

export default function App(){
// coloca o useFontes() antes do return, porque no return é quando o componente é reenderizado, e eu quero que as fontes sejam instaladas antes...

const [fontsLoaded] = useFonts ({
Inter_400Regular,
Inter_500Medium,
Rajdhani_500Medium,
Rajdhani_700Bold
})

if(!fontsLoaded){
  return <AppLoading/>
}
return ( 
  <Background>
    <StatusBar  //faz com que a barra de status foque aparente com o fundo transparente e com a cor dos caracteres em branco
      barStyle={"light-content"}
      backgroundColor={"transparent"}
      translucent
    />
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </Background>
);
}
