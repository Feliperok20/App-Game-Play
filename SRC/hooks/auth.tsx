import React,
 {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect, 
} from "react";

import * as AuthSession from 'expo-auth-session';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLLECTION_APPOINTMENT, COLLECTION_USERS} from '../Configs/database'


const {SCOPE} = process.env;
const {CLIENT_ID} = process.env;
const {REDIRECT_URI} = process.env;
const {RESPONSE_TYPE} = process.env;
const {CDN_IMAGE} = process.env;


import { api } from "../services/api";

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContexData={
    user: User;
    signIn: () => Promise<void> ; // Foi colocado uma promisse, porque pode levar um tempo para processar..
    // "Promise" permite que o codigo coninue executando as outras linhas sem esperar a linha acima finalizar a execução, ou seja, essa aplicação acima rodará em paralelo as outras...
    loading: boolean;
    signOut: () =>  Promise<void>;
}

type AuthProvideProps = {
    children: ReactNode; //React Node seria um nó React...
}

//Esse "&" acrescenta mais propriedades 
type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params:{
        access_token?: string;
        error?: string; // Esse erro retorna quando o usuario cancela a autenticação...
    }
}

export const AuthContext = createContext({} as AuthContexData);// eu tenho sempre que declarar o conteudo inicial do contexto...


function AuthProvider({children}:AuthProvideProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

   async function signIn(){
        try {
            setLoading(true);
            // Estou usando ` para deixar a URL como 'literal', porque eu consigo colocar variáveis dentro...
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            const {type,params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse; //authURL e passado a direção para onde  tem que ir quando começar o processo de autenticação...
            // coloquei o "{}" para desestruturar e pegar dois parametros especificos "type, params" do retorno da autenticação...
            
            if(type === "success" && !params.error){
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                const userInfo = await api.get('/users/@me'); // essa rota tem na documentação do discord...
                
                const firstName = userInfo.data.username.split(' ') [0]; // pega o nome completo do username, divide as plavras pelo espaço e pega a primeira palavra que fica na posição "0"...
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`
                   
                const userData={
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }
               
                await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData)); //JSON.stringFy() serve para passar o objeto como texto para ser salvo no banco de dados...
                setUser(userData);   
            }        
        } catch  {    
            throw new Error('Não foi possível autenticar');
        } finally{
            setLoading(false);

        }
    }

    async function signOut(){
        setUser ({} as User)
        await AsyncStorage.removeItem(COLLECTION_USERS);
        await AsyncStorage.removeItem(COLLECTION_APPOINTMENT);
    }

    async function loadUserStorageData(){        
        const storage = await AsyncStorage.getItem(COLLECTION_USERS)
        if(storage){
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

            setUser(userLogged)
        }
    }

    useEffect(() =>{
        loadUserStorageData();
    },[]);

    return(
        <AuthContext.Provider value={{user, signIn, loading, signOut}}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}