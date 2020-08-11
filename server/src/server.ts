/*
 antes de começar:
**yarn init -y         
**yarn add typescript -d (para fazer em typescript)
**yarn tsc --init        (gerar arquivo de configurações do typescript)
**yarn add ts-node-dev -D (iniciar servidor e atualizar quando tiver alteração no código)
*/

/*
lembrar-se de criar scripts para facilitar o desenvolvimento, ex:
"scripts":{
    "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts"  (ts-node-dev == tsnd)
}
existem flags, como (--transpile-only) -> converter o codigo de typescript para javascript, verificar error.
 (--ignore-watch node_modules)-> nao tentar fazer a conversao dos arquivos da node_modules
 (--respawn)-> mantem o server rodando, até que eu pare a execução
*/

/**
 * Dependencias de terceiros:
 * yarn add express -> micro framework -- yarn add @types/express
 */

import cors from 'cors'
import express from 'express'
import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(3333);


/**
 * Funcionalidades:
 * Conexoes:
 * Listar o total de conexoes realizadas
 * Criar uma nova conexao
 * 
 * Aulas:
 * Criar uma aula
 * Listar aulas - filtrar por materia, dia e horario
 */