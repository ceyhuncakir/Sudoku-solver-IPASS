import React from 'react'
import {Backtrackingform, VergelijkbareAlgoritme} from '../components/Forms'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});

/**
 * test case voor de form backtracking. er word gekeken of de naam van de form wel klopt. en of de tekst ook klopt
 */
describe("Backtracking form name check", () => {
    test('name existing check', () => {
        /**we pakken de component van de Backtrackingform hier */
        const wrapper = shallow(<Backtrackingform/>);
        /**we verwachten dat er binnen de wrapper een h1 tag bestaat met de volgende tekst er in. "Backtracking Algoritme:" is. en we verwachten dat dat waar is */
        expect(wrapper.find('h1').html()).toContain('Backtracking Algoritme:');
    });
});

/**
 * test case voor de form Vergelijkbare algoritmes. er word gekeken of de naam van de form wel klopt. en of de tekst ook klopt
 */
describe("Vergelijkbare form name check", () => {
    test('name existing check', () => {
        /**we pakken de component van de Backtrackingform hier */
        const wrapper = shallow(<VergelijkbareAlgoritme/>);
        /**we verwachten dat er binnen de wrapper een h1 tag bestaat met de volgende tekst er in. "Vergelijkbare Algoritme:" is. en we verwachten dat dat waar is */
        expect(wrapper.find('h1').html()).toContain('Vergelijkbare Algoritme:');
    });
});
