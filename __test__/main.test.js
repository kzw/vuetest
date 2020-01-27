import vue from '../code/src/main'
import axios from 'axios'

jest.mock('axios', () => ({
  defaults: {},
  get: jest.fn(() => Promise.resolve())
}))

describe('main test', () => {
  it('check compilation', done => {
    expect(vue).toEqual({})
    expect(axios.get).toBeCalled()
    done()
  })
})
