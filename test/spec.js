const { expect } = require('chai');

const name = 'scott lucas';
const name2 = 'antonia b.';

describe('name', () => {
  it('is a string', () => {
    expect(typeof name).to.equal('string');
  });
});
