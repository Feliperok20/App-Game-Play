import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator // Serve para lidar com carregamento...

} from 'react-native';


import {Styles} from './styles'
import { ButtonIcon } from '../../components/Buttonicon';
import { Background} from '../../components/Background';
import IlustrationImg from '../../assets/illustration.png';

import {useAuth} from '../../hooks/auth'
import { theme } from '../../global/styles/theme';


  export function Signin(){ //foi utilizado o export sem o defaut, porque com o default vc tem que usar sem  chaves na iportacao {View, Text}
  

  const {loading, signIn} = useAuth();
  //console.log(user); serve para mostrar as informações do usuário no console "terminal"...

  async function handleSignIn(){ //ações disparadas por interaçóes pelo usuário. 
    try {
      await signIn();
    } catch (error) {
      Alert.alert('error');
    }
  }
     return ( 
      <Background>
        <View style={Styles.container}>
        
          <Image 
          source = {IlustrationImg}
          style={Styles.image}
          resizeMode="stretch"//deixa a imagem bem ajustada...
          />

          <View style={Styles.content}>
            <Text style={Styles.title}>
            Conecte-se{'\n'} 
            e organize suas {'\n'} 
            jogatinas{'\n'}
            </Text>

            <Text style={Styles.subtitle}>
            Crie grupos para jogar seus games{'\n'} 
            favoritos com seus amigos 
            </Text>
            {
              loading? <ActivityIndicator color={theme.colors.primary}/>
              :
              <ButtonIcon
                title = "Entrar com Discord"
                onPress = {handleSignIn}
              />
            }
          </View>
        </View>  
    </Background>
   );
}

    //</View>nas Views eu ela tem uma propriedade den styles que eu posso passar o estilo direto nela 
   //ex: <View style={{flex: 1, backgroundColor: 'red', alignItems:'center', justifyContent: 'center'}}*\