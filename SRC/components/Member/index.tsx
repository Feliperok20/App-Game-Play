import React from 'react';
import { View, Text } from 'react-native';



import { styles } from './styles';
import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';

export type MemberProps = { //Exportei a typagem para que eu possa acessar a typagem "MemberProps" de qualquer outro lugar....
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;

    
}

export function Member({data}:Props){ 
    const { on, primary} = theme.colors;
    const isOnline = data.status === 'online'; // Essa função serve para pegar apenas a palavra "online" dentro do status.
    
    return(
        <View
        style = {styles.container}>
            <Avatar urlImage={data.avatar_url}/>

            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>

            <View style={styles.status}>
                <View
                    style={[
                        styles.bulletStatus,
                        {
                            backgroundColor: isOnline? on: primary
                        }

                    ]}
                />

                <Text style={styles.nameStatus}>
                    {isOnline ? 'Disponível' : 'Ocupado'}
                </Text>

            </View>
            </View>        



        </View>   
    )
}