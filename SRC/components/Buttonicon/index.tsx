import React from 'react';
import { 
RectButton, 
RectButtonProps  // importar todas as propriedades do RectButton para ser usado nas propriedades que eu criei, ou seja eu vou estanciar a minha interface Props com todas  as propriedades do Touchable
} from 'react-native-gesture-handler'
import {
    Text,
    Image,
    View,
} from 'react-native';


import {styles} from './styles'
import DiscordImg from '../../assets/discord.png';

type Props = RectButtonProps & { // estou criando uma propriedade de titulo do botao para que todas as vezes que eu criar o botao eu consiga editar o titulo... 
    //Ao inves de usar o 'tipe' eu poderia usar "interface" tambem. Resumindo, foi criado uma interface para que seja obrigatorio o acrescimo do titulo.
    title: string;
}

export function ButtonIcon({title, ...rest} : Props){
return(
<RectButton 
style={styles.container}
{...rest}
>
    <View style={styles.iconWrapper // Wrapper significa embrulho em ingles...
    }> 
        <Image source={DiscordImg} style={styles.icon}/>
    </View>
    <Text style={styles.title}>
        {title}
    </Text>
</RectButton>
);

}