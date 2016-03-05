import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

describe('sample test', () => {
  it('should succeed', () => {
    expect(true).to.be.true;
  });

  it('should work', () => {
    const X = () => <div />
    const wrapper = shallow(<X />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
