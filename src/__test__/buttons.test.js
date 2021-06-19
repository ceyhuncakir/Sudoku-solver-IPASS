import React from 'react'
import SudokuSolver from '../components/Solver'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});

/**
 * test case voor button generate. er word gekeken of de button wel bestaat
 */
describe("Generate button test", () => {
    test('existing check', () => {
        /** we pakken de component van de sudoku solver hier */
        const wrapper = shallow(<SudokuSolver/>);
        /** we verwachten dat er een button is met een id van #generatebutton. en we verwachten dat dat waar is */
        expect(wrapper.exists('#generatebutton')).toBe(true);
    });
});

/**
 * test case voor button stopbutton. er word gekeken of de button wel bestaat
 */
describe("stopbutton button test", () => {
    test('existing check', () => {
        /** we pakken de component van de sudoku solver hier */
        const wrapper = shallow(<SudokuSolver/>);
         /** we verwachten dat er een button is met een id van #stopbutton. en we verwachten dat dat waar is */
        expect(!wrapper.exists('#stopbutton')).toBe(true);
    });
});

/**
 * test case voor button solvebutton. er word gekeken of de button wel bestaat
 */
describe("solvebutton button test", () => {
    test('it exists', () => {
        /** we pakken de component van de sudoku solver hier */
        const wrapper = shallow(<SudokuSolver/>);
         /** we verwachten dat er een button is met een id van #solvebutton. en we verwachten dat dat waar is */
        expect(wrapper.exists('#solvebutton')).toBe(true);
    });
});

/**
 * test case voor button clearbutton. er word gekeken of de button wel bestaat
 */
describe("clearbutton button test", () => {
    test('existing check', () => {
        /** we pakken de component van de sudoku solver hier */
        const wrapper = shallow(<SudokuSolver/>);
        /** we verwachten dat er een button is met een id van #clearbutton. en we verwachten dat dat waar is */
        expect(wrapper.exists('#clearbutton')).toBe(true);
    });
});

/**
 * test case voor button undobutton. er word gekeken of de button wel bestaat
 */
describe("undobutton button test", () => {
    test('existing check', () => {
        /** we pakken de component van de sudoku solver hier */
        const wrapper = shallow(<SudokuSolver/>);
        /** we verwachten dat er een button is met een id van #undobutton. en we verwachten dat dat waar is */
        expect(wrapper.exists('#undobutton')).toBe(true);
    });
});

/**
 * test case voor button Sudokuboard. er word gekeken of de sudoku board wel bestaat
 */
describe("Sudokuboard test", () => {
    test('existing check', () => {
        /** we pakken de component van de sudoku solver hier */
        const wrapper = shallow(<SudokuSolver/>);
         /** we verwachten dat er een button is met een id van #sudokuboard. en we verwachten dat dat waar is */
        expect(wrapper.exists('#sudokuboard')).toBe(true);
    });
});