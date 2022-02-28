import React from 'react';
import {View, Text, Alert} from 'react-native';
import {styles} from './styles'
import {Avatar} from '../../components/Avatar'
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';

export function Profile ( ){
    const { user, signOut} = useAuth();

    function handleSingOut(){
        Alert.alert('Logout', 'Deseja sair do GamePlay?',
        [
            {
                text: 'Nao',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress:() =>  signOut()
            }
        ])

    }
    
return (
<View style={styles.container}>



    <RectButton onPress={handleSingOut}>
        <Avatar
        urlImage={user.avatar}
        />
    </RectButton>

    <View>
    <View style={styles.user}>
        <Text style={styles.greeting}>
            Ola.
        </Text>

        <Text style={styles.username}>
            {user.firstName}
        </Text>
        </View>
    

        <Text style={styles.message}>
            Hoje e dia de Vitória!
        </Text>
    </View>
</View>
);

}