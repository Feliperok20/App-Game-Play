import React, {useState, useCallback} from 'react'; //useCallback serve para memorizar as referências de funções para não ter que ficar recriando as funções todas as vezes que a tela for recarregada.. 
import {View, FlatList} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; //useFocusEffect vai renderizar a lista de appointments todas as vezes que a tela recarregar...
import AsyncStorage from '@react-native-async-storage/async-storage';


import {styles} from './styles';
import {Profile} from '../../components/Profile';



import { ButtonAdd } from '../../components/ButtonAdd';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { CategorySelect } from '../../components/CategorySelect';
import { COLLECTION_APPOINTMENT } from '../../Configs/database';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { JsxAST } from 'react-native-svg';



export function Home(){
    const[category, setCategory]= useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]> ([]);
    const navigation = useNavigation();

    


   

    function handleAppointmentDetails (guildSelected : AppointmentProps){
        navigation.navigate('AppointmentDetails' as never, {guildSelected});
    }

    function handleAppointmentCreate (){
        navigation.navigate('AppointmentCreate' as never)
    }

    function handleCategorySelect(categoryId:string){ // essa funcao faz com que, se a categoria estiver selecionada ele tira a selecao, caso nao esteja ele seleciona ela.
        categoryId === category ? setCategory('') : setCategory(categoryId);// if ternario
    }

    async function loadAppointments(){
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : []; // Para dar tipagem para as informações que serão salvas dentro de appointment eu tenho que colocar o ": AppointmentProps[]" assim eu consigo manipular as informações e conseguir separar por categorias.
        
        if(category){
            setAppointments(storage.filter(item => item.category == category)); // essa função vai filtrar apenas as categorias iguais a categoria que foi selecionada no "categoriaCompare"...
        }else{
            setAppointments(storage)
        }
        setLoading(false);
    }


     useFocusEffect(useCallback(()=> {
         loadAppointments();
     }, [category]));
    
return (
   <Background>           
           <View style={styles.header}>
               <Profile />
               <ButtonAdd onPress={handleAppointmentCreate}/>
           </View>   
                

            <CategorySelect
                categorySelected={category}
                        setCategory={handleCategorySelect}                                
            />

            { loading?  <Load/> :
                <>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle={`Total ${appointments.length}`}
                />    
                
                <FlatList
                    data={appointments} // passa o vetor "appointments" para o objeto "data"
                    keyExtractor={item => item.id}//Pega o ID do appointmments em quest'ao e joga como id desse item da flat list
                    renderItem={({ item }) => ( // esse cara reenderiza cada appointmens que ele identifica como "item" e reenderiza cada um na forma de um aAppoinment enviando os dados pelo "data".
                    <Appointment    
                        data={item}
                        onPress={() => handleAppointmentDetails(item)}
                    />
                    )}
                    ItemSeparatorComponent={() => <ListDivider/>}//divisor da lista...
                    style={styles.matches}
                    showsVerticalScrollIndicator = {false}
                    contentContainerStyle = {{paddingBottom: 69}} 
                    />
                </> 

            }
    </Background>     
   
);
}