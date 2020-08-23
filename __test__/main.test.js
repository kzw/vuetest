import vue from '../code/src/main'

describe('main test', () => {
  it('check compilation', done => {
    expect(vue).toEqual({})
    done()
  })
})
