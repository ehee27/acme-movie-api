const { expect } = require('chai');

const name = 'scott lucas';
const name2 = 'antonia b.';

describe('name', () => {
  it('is a string', () => {
    expect(typeof name).to.equal('string');
  });
});

describe('name', () => {
  it('is ten chars', () => {
    expect(name2.length).to.equal(10);
  });
});
