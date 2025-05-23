// MongoDB connection via mongoose
import './db.js';

// Middleware from mode_modules/
import express from 'express';   // express
import cookieParser from 'cookie-parser';  // express uses to parse HTTP cookies in Request
import compression from 'compression';     // server can accept compressed file
import morgan from 'morgan';     // data logger to log responese and request in the console
import cors from 'cors';         // enables CORS for API from different domain, protocol, port access API

// import router to navigate the endpoints
import router from './routes/api-router.js';

const app = express();

// Express middleware
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// Routing
app.get('/', (req, res) => {
    res.send('The Server is working!');
});

// Callback to any HTTP requests
app.use('/m1', router);
  
export default app;
