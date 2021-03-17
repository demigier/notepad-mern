import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';

import notesRoutes from './routes/notes.routes'; 

const app = express();

//SETS THE PORT
app.set('port', config.PORT);


//SETS USE OF MORGAN AND CORS     
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());   //IT GIVES THE ABILITY TO UNDERSTAND JSON
app.use(express.urlencoded({extended: false}));   //UNDERSTAND FIELDS FROM POSTS

//DECLARES THE USE OF ROUTES
app.use(notesRoutes);

export default app;