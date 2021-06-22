import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';


const app = express();

//neste formato qualquer domínio pode acessar.
app.use(cors()); 

//Formato usado para ambiente de produção com um array de dominios
// app.use(cors({
//     origin:['dominio.com.br', 'gustavosouza.com.br']
// }));

app.use(express.json());

app.use(routes);

//Rota Estática para disponibilizar o download.
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => {
    console.log('Server Staterd on port 3333!')
});
