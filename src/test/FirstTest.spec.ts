import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Hytalo'

  expect(user.name).toEqual('Hytalo')
})
