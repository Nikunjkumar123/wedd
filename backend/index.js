const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db.js');
const authenticationRouter = require('./Routers/authenticationRouter.js')
const myprofileRouter=require('./Routers/myprofileRouter.js');
const adminRouter = require('./Routers/adminRouter.js');
const connectionRouter = require('./Routers/connectionRouter.js');
const fileUpload = require('express-fileupload');
const cloudinary = require('./utils/cloudinary.js');
const verifyToken=require('./Middleware/verifyToken.js');
const vefiryADMIN = require('./Middleware/vefiryADMIN.js')
const blockByADMINForWork = require('./Middleware/blockByAdmin.js');
const freekaViewroute = require('./Routers/freekaViewroute.js');
const ProfilesRouter = require('./Routers/ProfilesRouter.js');

const corsOptions = {
    origin: 'http://localhost:3001', 
    methods: 'GET, POST, PUT, DELETE', 
    credentials: true, 
};

app.use(express.json());
app.use(express.static('./public'));
app.use(cors(corsOptions)); 
app.use(cookieParser());
app.use(fileUpload({useTempFiles:true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // your frontend URL
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
  

app.use('/showpieces',freekaViewroute);
app.use('/api/v1/auth',authenticationRouter);
app.use('/api/v1/profiles',verifyToken,ProfilesRouter);
app.use('/api/v1/myprofile',verifyToken,blockByADMINForWork,myprofileRouter);
app.use('/api/v1/connectionRequest',verifyToken,connectionRouter);
// app.use('/api/v1/adminPanel',verifyToken,vefiryADMIN,adminRouter);
app.use('/api/v1/adminPanel',adminRouter);


connectDB(process.env.URL)
app.listen(process.env.PORT,(()=>{
    console.log("connected to Port",process.env.PORT);
}));