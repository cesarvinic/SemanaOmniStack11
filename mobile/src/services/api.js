import axios from 'axios';

const api = axios.create({
    /*Ip da máquina que está rodando a aplicação.
    *Por ser uma aplicação Mobile, tem que remeter ao IP da máquina
    *e não ao localhost. Como dica: pode-se observar na tela do expo 
    *o ip, no canto inferior esquerdo da tela, logo acima do QRCode, ou 
    *no prompt de comando digitar ipconfig. */
    baseURL: 'http://192.168.0.3:3333'
});

export default api;