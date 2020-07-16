import axios from 'axios';

const getProdutos = axios.create({
    baseURL:
        'http://192.168.3.110:5000/api/produto'
})

export default getProdutos;