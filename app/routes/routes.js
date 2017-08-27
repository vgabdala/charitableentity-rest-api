import express from 'express'
import mongoose from 'mongoose'
import {
	createEntity, 
	viewEntity, 
	updateEntity, 
	deleteEntity, 
	listEntities
} from '../controllers/controller'

const routes   = express.Router() 

// List Entities
routes.get('/entity', listEntities)

//Create Entity
routes.post('/entity', createEntity)

//View Entity
routes.get('/entity/:entityId', viewEntity)

//Edit Entity
routes.patch('/entity/:entityId', updateEntity)

//Delete Entity
routes.delete('/entity/:entityId', deleteEntity)

export default routes;