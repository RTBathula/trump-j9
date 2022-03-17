import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from "body-parser";

import routes from './backend-orchestrator/routes/index.js';
import initServices from './backend-orchestrator/init.js';

dotenv.config();

const __dirname = process.cwd();
const PORT = process.env.PORT || 8400;
const serverStatus = `Trump J9 is up and running on port on ${PORT}`;
const STATIC_DIR = process.env.STATIC_DIR || __dirname + '/dist';

const app = express();
app.use(cors());
app.use(express.static(STATIC_DIR));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/", routes);
app.get("/ping", (req, res) => {
	return res.status(200).send(serverStatus);
});

app.get('*', (req, res) => {
  res.sendFile(STATIC_DIR + '/index.html');
});

initServices();

app.listen(PORT, () => {	
	console.log(serverStatus); 
});	
