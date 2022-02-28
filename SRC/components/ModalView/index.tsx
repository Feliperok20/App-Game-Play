import React, {ReactNode} from 'react';
import {
    View,
    Modal, //Permite que uma tela apareça em sima de outra...
    ModalProps,
    TouchableWithoutFeedback, // Esse recurso identifica que o usuário realizou um clique.
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { Background } from '../Background';
import { styles } from './styles';

type Props = ModalProps & {
    childrem: ReactNode;
    closeModal: () => void;
    
}

export function ModalView({childrem, closeModal, ...rest} : Props){  
return (   
    <Modal
        transparent
        animationType='slide'
        statusBarTranslucent
        {...rest}
    >
        <TouchableWithoutFeedback onPress = {closeModal}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                    <View style={styles.bar}/>
                    {childrem} 
                    
                    </Background>
                </View>
            </View> 
        </TouchableWithoutFeedback>       
    </Modal>     
);
}