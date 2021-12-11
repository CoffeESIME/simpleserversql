import  express, { application } from "express";
import TodoRoutes from './src/routes/todos.routes.js'

const app=express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//settings
app.set('port', 4000)
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//middleware
app.use(TodoRoutes)
export default app;