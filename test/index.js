var assert = require('assert'), 
    declint = require('../index')

describe('Decl int', function(){
  it('valid first form', function(){
    assert.equal(declint(1, ['диван', 'дивана', 'диванов']), 'диван')
  })

  it('valid second form', function(){
    assert.equal(declint(2, ['диван', 'дивана', 'диванов']), 'дивана')
  })

  it('valid fifth form', function(){
    assert.equal(declint(5, ['диван', 'дивана', 'диванов']), 'диванов')
  })

  it('substitude %s with number', function(){
    assert.equal(declint(13, ['%s диван', '%s дивана', '%s диванов']), '13 диванов')
  })

  it('valid zero form', function(){
    assert.equal(declint(0, ['%s диван', '%s дивана', '%s диванов']), '0 диванов')
  })
})
