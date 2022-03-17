import express from 'express';
import * as userServ from '../services/user.js';

const router = express.Router();

router.get("/:groupName", (req, res) => {	
	userServ.getGroup(req.params.groupName).then((resp) => {
		return res.status(200).json(resp);
	}).catch((e) => {		
		return res.status(400).send(e);
	});
});

router.post("/", (req, res) => {	
	userServ.createOrJoinGroup(req.body).then((resp) => {
		return res.status(200).json(resp);
	}).catch((e) => {		
		return res.status(400).send(e);
	});
});

export default router;