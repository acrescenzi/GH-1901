import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import Critters from '../client/components/Critters.js';
import Navbar from '../client/components/Navbar.js';
import Main from '../client/components/Main.js';

chai.use(sinonChai);

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Critters>', () => {
  let critters = [{
    name: 'Eeyore'
  }, {
    name: 'Thunder'
  }];

  let crittersWrapper = shallow(<Critters critters={critters} title='potato' />);

  it('has an <h1> that renders props.title', () => {
    expect(crittersWrapper.find('h1').text()).to.equal('potato');
  });
})

describe('<Navbar', () => {
  it('calls selectCritters on click', () => {
    // spy
    let selectCrittersSpy = sinon.spy();
    // shallow copy component
    let navbarWrapper = shallow(<Navbar selectCritters={selectCrittersSpy} />)
    // simulate click
    navbarWrapper.find('button#dogs').simulate('click'); // same as actually calling onClick event handler
    // make assertion
    expect(selectCrittersSpy.calledOnce).to.equal(true);
  })

  it('calls selectCritters with the right button param', () => {
   // spy
   let selectCrittersSpy = sinon.spy();
   // shallow copy component
   let navbarWrapper = shallow(<Navbar selectCritters={selectCrittersSpy} />)
   // simulate click
   navbarWrapper.find('button#dragons').simulate('click'); // same as actually calling onClick event handler
   expect(selectCrittersSpy.calledWith('dragons')).to.equal(true);
  })
})
