const { expect } = require('chai');

const name = 'scott lucas';

describe('name', () => {
  it('is a string', () => {
    expect(typeof name).to.equal('string');
  });
});
