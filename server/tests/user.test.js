import { getToys } from './testHelper';
import User from '../src/models/User';
import Toy from '../src/models/Toy';
import { Types } from 'mongoose';

test('test', () => {
  return getToys({ name: 'red truck' }).then(toys => {
    expect(toys[0]).toEqual({
      name: 'red truck',
      _id: expect.any(String),
      user: expect.any(String),
      __v: 0
    })
  })
})
