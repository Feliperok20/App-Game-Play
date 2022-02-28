import uuid from 'react-native-uuid'
import {Feather} from '@expo/vector-icons'
import React, {Children, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView, // Essa opção permite que o teclado não sobreponha a área que serpa nserido o texto...
    Platform, // permite a customização pára cada plataforma...
    Modal,
} from 'react-native';



import { theme } from '../../global/styles/theme';
import {COLLECTION_APPOINTMENT} from '../../Configs/database'

import {styles} from './styles';

import { Guilds } from '../Guilds';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { GuildProps } from '../../components/Guild';
import { TextArea } from '../../components/TextArea';
import { ModalView } from '../../components/ModalView';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallImput } from '../../components/SmallImput';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';










export function AppointmentCreate(){
    const[category, setCategory]= useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false); //Criando uma variavel que tem o status defaul como "false" e pode ser setada pelo "setOpenGuildsModal"...
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);//Criando uma variavel que começa como objeto vazio do tipo GuildProps "<GuildProps>({} as GuildProps)", essa variável foi criada para armaznar o servidor selecionado dentro da função "handleGuilds()"
    // as KeyWords "as" diz para o compilador que ele tem que considerar o vazio "{}" como um tipo GuldProps.
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDesctiption] = useState('');
    
    const navigation = useNavigation();

    function handleOpenGuilds(){ // essa função seta "true" na variavel "setOpenGuildsModal"...
        setOpenGuildsModal(true);
    }
    function handleCloseGuilds(){ // essa função seta "false" na variavel "setOpenGuildsModal"...
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelect: GuildProps){ // essa função seleciona uma variavel chamada "guildSelect"  do tipo GuildProps utilisando a tipagem  feita no componente Guild ...
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    function handleCategorySelect(categoryId:string){ // essa funcao faz com que, se a categoria estiver selecionada ele tira a selecao, caso nao esteja ele seleciona ela.
       setCategory(categoryId);
    }

    async function handleSave(){
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} ás ${hour}/${minute}h`,
            description
        };
        
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
        const appointments = storage ? JSON.parse(storage) : [];
        console.log(storage);
        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENT,
            JSON.stringify([...appointments, newAppointment])
            
        );
        navigation.navigate('Home' as never);
    } 
    


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'} //se for no IOS o teclado faz o preenchimento e se for em outra pçataforma, meche na altura.
             style={styles.container}
         >
            <Background>
                <ScrollView>
                    <Header 
                    title="Agendar partida"
                    />
                    
                    <Text style={[
                        styles.label, 
                        {marginLeft: 24, marginTop: 36, marginBottom:18 }]}
                    >
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    guild.icon? <GuildIcon guildId={guild.id} iconId={guild.icon}/> : <View style={styles.image}/>
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name? guild.name : 'Selecione um servidor'}
                                    </Text>  
                                </View>
                                <Feather
                                name="chevron-right"
                                color={theme.colors.heading}
                                size={18}
                                />
                            </View>                        
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text  style={[styles.label, {marginBottom:12}]} >
                                    Dia e mês
                                </Text>

                                <View style={styles.column}>
                                    <SmallImput
                                        maxLength={2}
                                        onChangeText={setDay} // quando o testo mudar, atualiza o estado correspondente...
                                     />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallImput 
                                        maxLength={2}
                                        onChangeText={setMonth}
                                    />
                                </View>
                            </View>

                            <View>
                                <Text  style={[styles.label, {marginBottom:12}]} >
                                    Hora e minuto
                                </Text>

                                <View style={styles.column}>
                                    <SmallImput 
                                        maxLength={2}
                                        onChangeText={setHour}
                                    />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallImput 
                                        maxLength={2}
                                        onChangeText={setMinute}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.field, {marginBottom:12}]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea
                            multiline  
                            maxLength={100}                  
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDesctiption}
                        />
                        
                        <View style={styles.footer}>
                            <Button 
                             title='Agendar'
                             onPress={handleSave}/>
                        </View>

                    </View> 
                </ScrollView>
            </Background> 

            <ModalView
             visible={openGuildsModal}
             childrem={<Guilds handleGuildSelect={handleGuildSelect}/>}
             closeModal={handleCloseGuilds}

            />  
        </KeyboardAvoidingView>  

    )
} 