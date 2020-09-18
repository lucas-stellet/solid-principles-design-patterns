import express from 'express';
import {MongoHelper} from './mongo.helper';

const app = express();

app.get('/', async (req, res) => {
  const userModel = await MongoHelper.instance.getCollection('users')
  const users = await userModel.find().toArray()
  res.send(users);
});

app.post('/', async (req, res) => {
  const userModel = await MongoHelper.instance.getCollection('users')
  await userModel.insertOne({ name: 'Lucas' })
  res.send('Usuário criado')
})

app.listen(5050, () => console.log('server running...'));
