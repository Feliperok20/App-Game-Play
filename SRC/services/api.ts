// Todas as vezes que for necessário buscar dados do usuário ou do servidor, será necessário realizar uma requisição nos end points do Discord...
// Todas as vezes que for realizar a requisição, o começo dos end points sertão sempre 'https://discord.com/api'.
// Por esse motivo esse começo foi centralizado aqui...

import axios from 'axios'


const api =  axios.create({
    baseURL:'https://discord.com/api'
    
});

export {api}


