import app from './app';
import './database';



app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'));
})

/*app.listen(app.get('port'), '192.168.0.133', ()=>{
    console.log("Server on port", app.get('port'));
});*/