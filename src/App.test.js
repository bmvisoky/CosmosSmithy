import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';
import MainCards from './components/mainComponents/mainCards';
import InitiativePage from './components/pages/initiativePage';
import MonsterPage from './components/pages/monsterPage';
import JournalPage from './components/pages/journalPage';
import Button from 'reactstrap';
import { shallow, mount } from 'enzyme';


describe('INTEGRATION', () => {
  it('Ensures app renders', () => {
    shallow(<App />);
  });
  
  it('Ensures links work', () => {
    const { getByText } = render(<MainCards />);
    const monsterPage = getByText(/monster/i);
    const initiativePage = getByText(/initiative/i);
    const journalPage = getByText(/journal/i);
    expect(monsterPage).toBeInTheDocument();
    expect(initiativePage).toBeInTheDocument();;
    expect(journalPage).toBeInTheDocument();
  
  });
});

describe('Ensure initiative page works', () => {
  it('Ensure renders without crash', () => {
    shallow(<JournalPage />);
  });

  it('Ensure save works', () => {
    const wrapper = shallow(<JournalPage />);
    const button = wrapper.find("#bt");
    const instance = wrapper.instance();

    instance.saveFile = jest.fn(instance.saveFile);

    expect(wrapper.find('#bt').text()).toEqual('<Button />');
  });
});

describe('Ensure monster page works', () => {
  it('Ensure renders without crash', () => {
    shallow(<MonsterPage />);
  });

  it('Ensure random works', () => {
    const wrapper = mount(<MonsterPage />);
    const button = wrapper.find('#btn');

    expect(wrapper.find('#btn').text()).toEqual('Generate Monster!');
  })
});

describe('Ensure initiative page works', () => {
  it('Ensures renders without crashing', () => {
    shallow(<initiativePage />);
  });

  it('Ensures adding character works', () => {
    const newValue = 'Gilgamesh';
    const wrapper = mount(<InitiativePage />);
    const init = wrapper.find('#charInit').at(1);
    const name = wrapper.find('#charName').at(1);
    const health = wrapper.find('#charHealth').at(1);
    const row = wrapper.find('#initTable');

    init.simulate('change', { target: {value: 17}});
    name.simulate('change', { target: {value: newValue}});
    health.simulate('change', {table: {value: 47}});
    
    expect(wrapper.find('Button').at(0).text()).toEqual('Add To Initiative');
  });
});
