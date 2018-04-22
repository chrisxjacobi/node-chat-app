const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(73948);

    expect(res).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var res = isRealString('   ');

    expect(res).toBe(false);
  });

  it('should allow srings with non-space characters', () => {
    var res = isRealString(' a    ');

    expect(res).toBe(true);
  });
})

// import isRealString

// isRealString
  // should reject non-string values
  // should reject strings with only spaces
  // should allow strings with non space characters
