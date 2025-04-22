//Carolina de Jesus Ortega Cepeda A01282386

import express from 'express';
import tweetRoutes from './routes/tweet'
import userRoutes from './routes/user'

const app = express();
app.use(express.json());

app.use("/api/tweet", tweetRoutes) 
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



//CAROLINA DE JESUS ORTEGA CEPEDA A01282386
//ACTIVIDAD DE TWEETS Y USERS BACK END ACTIVITY CON API(?)
//CONTEXTP: TAREA PARA ANTES DEL JUEVES 3 :PP
