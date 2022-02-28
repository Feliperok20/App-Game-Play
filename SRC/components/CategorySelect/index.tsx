import React from "react";
import { RectButton, RectButtonProps} from 'react-native-gesture-handler' // esse caras respeita o efeito do bot'ao de cada plataforma IOS/ANDROID
import{ ScrollView } from 'react-native' // ativa a rolagem!!


import {styles} from './styles';
import { categories } from "../../utils/categories";
import { Category} from '../Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId:string) => void;
    hasCheckBox?: boolean; // o ponto de interrogacao significa que e opcional colocar esse parametro...
}

export function CategorySelect ({
    categorySelected, 
    setCategory,
    hasCheckBox = false,
}:Props){
    
    return(
        <ScrollView 
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false} //isso nao deixa que apareca a barra de rolagem...
        contentContainerStyle={{paddingRight: 40}} //isso faz com que, no final da listagem tenha um expaco de 40 que vai bater certinho com o espaco do botao na lateral...
        >
        {
            categories.map(category => (//percorre todas as categorias e gera um novo componente do tipo Category
                <Category
                    key={category.id} // sempre que vc esta percorrendo listas tem que ter uma chave, pra questao de performace no rect                 
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={()=> setCategory(category.id)}
                    hasCheckBox={hasCheckBox}
                />
            ))
        }
        </ScrollView>
    );
}