import React from 'react'
import Footer from '../components/Footer'
import Enzyme, { ElementClass, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});

/**
 * test case voor de footer. er word gekeken of de footer wel bestaat
 */
describe("footer check", () => {
    test('existing check', () => {
        /** we pakken de component van de Footer hier */
        const wrapper = shallow(<Footer/>);
        /** we verwachten dat er een footer is. en we verwachten dat dat waar is */
        expect(wrapper.exists('.footer')).toBe(true);
    });
});

/**
 * test case voor socials selectie. er word gekeken of de selectie socials wel bestaat
 */
describe("socials footer check", () => {
    test('existing check', () => {
        /**we pakken de component van de Footer hier */
        const wrapper = shallow(<Footer/>);
        /**we verwachten dat er een footer is met een wrapper van socials waar de socialknoppen zijn. en we verwachten dat dat waar is */
        expect(wrapper.exists('.socials')).toBe(true);
    });
});

/**
 * test case voor social twitter. er word gekeken of de social twitter wel bestaat
 */
describe("Twitter footer check", () => {
    test('existing check', () => {
        /**we pakken de component van de Footer hier */
        const wrapper = shallow(<Footer/>);
        /**we verwachten dat er een footer is met een social knop met de id #twitter. en we verwachten dat dat waar is */
        expect(wrapper.exists('#twitter')).toBe(true);
    });
});

/**
 * test case voor social Github. er word gekeken of de social Github wel bestaat
 */
describe("Github footer check", () => {
    test('existing check', () => {
        /**we pakken de component van de Footer  hier */
        const wrapper = shallow(<Footer/>);
        /**we verwachten dat er een footer is met een social knop met de id #github. en we verwachten dat dat waar is */
        expect(wrapper.exists('#github')).toBe(true);
    });
});

/**
 * test case voor social Mail. er word gekeken of de social Mail wel bestaat
 */
describe("Mail footer check", () => {
    test('existing check', () => {
        /**we pakken de component van de Footer  hier */
        const wrapper = shallow(<Footer/>);
        /**we verwachten dat er een footer is met een social knop met de id #mail. en we verwachten dat dat waar is */
        expect(wrapper.exists('#mail')).toBe(true);
    });
});
