import { getToy } from './testHelper';

test('test', async () => {
  const toy = await getToy({ name: 'red truck' })
  expect(toy).toEqual({
    name: 'red truck',
    _id: expect.any(String),
    user: expect.any(String),
    __v: 0
  });
})
