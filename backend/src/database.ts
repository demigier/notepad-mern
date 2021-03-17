import mongoose from 'mongoose';
import config from './config'

//CONECT TO DATABASE
(async ()=> {
   try{
        const options = {
            useUnifiedTopology: true, 
            useNewUrlParser: true
        };
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`, options);
        console.log("Database connected to: " , db.connection.name); 
   }catch(err){
        console.error(err);
   }
})()

