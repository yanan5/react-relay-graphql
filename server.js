import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import { MongoClient } from 'mongodb';

const MONGO_URL = "mongodb://localhost/test";
let app = express();

app.use(express.static('public'));
(async () => {
	let mongoClient = await MongoClient.connect(MONGO_URL);
	let db = mongoClient.db('test');
	let schema = Schema(db);
	app.use('/graphql', GraphQLHTTP({
		schema,
		graphiql: true
	}))
	app.listen(3000, () => console.log('listening on port 3000'));

	//Generate schema.json
	// let json = await graphql(schema, introspectionQuery);
	// fs.writeFile('./data/schema.json', JSON.stringify(json), err => {
	// 	if (err) 
	// 		throw err;

	// 	console.log("JSON schema created");
	// })
})();

// MongoClient.connect(MONGO_URL, (err, mongoClient) => {
// 	if(err) throw err;

// 	db = mongoClient.db('test');
// 	app.use('/graphql', GraphQLHTTP({
// 		schema: Schema(db),
// 		graphiql: true
// 	}))
// 	app.listen(3000, () => console.log('listening on port 3000'));
// });

app.get('/', (req, res) => {
  res.send('hello world wexpress');
});

// app.get('/data/links', (req, res) => {
// 	db.collection('links').find({}).toArray((err, links) => {
// 		if(err) throw err;
// 		res.json(links);
// 	});
// })