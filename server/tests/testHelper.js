import { config } from 'dotenv';
config();

import mongoose from 'mongoose';
import { connect } from '../src/utils/connect';
import request from 'supertest';
import User from '../src/models/User';
import Toy from '../src/models/Toy';
import app from '../src/routes/app';

connect('mongodb://172.17.0.2:27017/toys_test');

beforeEach(() => {
  return mongoose.connection.dropDatabase()
});

beforeEach(() => {
  return User.create(
    { email: 'test1@test.com', password: 'test1234' },
    { email: 'test2@test.com', password: 'test1234' },
    { email: 'test3@test.com', password: 'test1234' },
    { email: 'test4@test.com', password: 'test1234' },
    { email: 'test5@test.com', password: 'test1234' },
  );
});

beforeEach(() => {
  return User.findOne()
    .then(user => {
      return Toy.create(
        { name: 'red ball', user: user },
        { name: 'blue ball', user: user },
        { name: 'red truck', user: user },
        { name: 'blue truck', user: user }
      )
    });
});

let token;
beforeEach(() => {
  return request(app)
    .post('/api/users/login')
    .send({ email: 'test1@test.com', password: 'test1234' })
    .then(res => res.get('X-AUTH-TOKEN'))
    .then(headerToken => token = headerToken);
});

export const prepare = doc => JSON.parse(JSON.stringify(doc));
export const prepareList = docs => docs.map(prepare);

export const setupTestGetters = Model => {
  return [
    (query = {}) => Model.findOne(query).then(prepare),
    (query = {}) => Model.find(query).then(prepareList)
  ]
}

export const [getUser, getUsers] = setupTestGetters(User);
export const [getToy, getToys] = setupTestGetters(Toy);
export const getToken = () => token;
