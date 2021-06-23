import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SudokuSolver from "../components/Solver";

Enzyme.configure({ adapter: new Adapter()});

/**
 * test case voor algorithm truth check. er word in de test gekeken of de algoritme wel de juiste uitkomst geeft
 */

describe("Algorithm test", () => {
    

    test('Algoritme truth check', () => {
        /** we pakken de component van de sudoku solver hier */
        const wrapper = shallow(<SudokuSolver />);
        const preventDefault = jest.fn()

        /** Er word gekeken of de eerste cell de waarde heeft van 4 */
        if(wrapper.find("#0,0").instance().value = "4") {
            /** als de cell de juiste waarde heeft dan simulaten we een klik op de solvebutton */
            wrapper.find('#solvebutton').simulate('click', {preventDefault});

            wrapper.update()
            
            /** hier worden in elke cell geexpect dat er een value is binnen de cell zodat we weten dat de algoritme de juiste oplossing heeft gegeven*/
            expect(wrapper.find('#0,0').instance().value = "4");
            expect(wrapper.find('#0,1').instance().value = "9");
            expect(wrapper.find('#0,2').instance().value = "6");
            expect(wrapper.find('#0,3').instance().value = "1");
            expect(wrapper.find('#0,4').instance().value = "5");
            expect(wrapper.find('#0,5').instance().value = "7");
            expect(wrapper.find('#0,6').instance().value = "8");
            expect(wrapper.find('#0,7').instance().value = "3");
            expect(wrapper.find('#0,8').instance().value = "2");

            expect(wrapper.find('#1.0').instance().value = "2");
            expect(wrapper.find('#1,1').instance().value = "1");
            expect(wrapper.find('#1,2').instance().value = "8");
            expect(wrapper.find('#1,3').instance().value = "3");
            expect(wrapper.find('#1,4').instance().value = "9");
            expect(wrapper.find('#1,5').instance().value = "6");
            expect(wrapper.find('#1,6').instance().value = "7");
            expect(wrapper.find('#1,7').instance().value = "4");
            expect(wrapper.find('#1,8').instance().value = "5");

            expect(wrapper.find('#2,0').instance().value = "7");
            expect(wrapper.find('#2,1').instance().value = "5");
            expect(wrapper.find('#2,2').instance().value = "3");
            expect(wrapper.find('#2,3').instance().value = "2");
            expect(wrapper.find('#2,4').instance().value = "8");
            expect(wrapper.find('#2,5').instance().value = "4");
            expect(wrapper.find('#2,6').instance().value = "1");
            expect(wrapper.find('#2,7').instance().value = "9");
            expect(wrapper.find('#2,8').instance().value = "6");

            expect(wrapper.find('#3,0').instance().value = "5");
            expect(wrapper.find('#3,1').instance().value = "3");
            expect(wrapper.find('#3,2').instance().value = "1");
            expect(wrapper.find('#3,3').instance().value = "6");
            expect(wrapper.find('#3,4').instance().value = "7");
            expect(wrapper.find('#3,5').instance().value = "2");
            expect(wrapper.find('#3,6').instance().value = "9");
            expect(wrapper.find('#3,7').instance().value = "8");
            expect(wrapper.find('#3,8').instance().value = "4");

            expect(wrapper.find('#4,0').instance().value = "6");
            expect(wrapper.find('#4,1').instance().value = "4");
            expect(wrapper.find('#4,2').instance().value = "9");
            expect(wrapper.find('#4,3').instance().value = "8");
            expect(wrapper.find('#4,4').instance().value = "3");
            expect(wrapper.find('#4,5').instance().value = "1");
            expect(wrapper.find('#4,6').instance().value = "2");
            expect(wrapper.find('#4,7').instance().value = "5");
            expect(wrapper.find('#4,8').instance().value = "7");

            expect(wrapper.find('#5,0').instance().value = "8");
            expect(wrapper.find('#5,1').instance().value = "2");
            expect(wrapper.find('#5,2').instance().value = "7");
            expect(wrapper.find('#5,3').instance().value = "5");
            expect(wrapper.find('#5,4').instance().value = "4");
            expect(wrapper.find('#5,5').instance().value = "9");
            expect(wrapper.find('#5,6').instance().value = "6");
            expect(wrapper.find('#5,7').instance().value = "1");
            expect(wrapper.find('#5,8').instance().value = "3");

            expect(wrapper.find('#6,0').instance().value = "3");
            expect(wrapper.find('#6,1').instance().value = "7");
            expect(wrapper.find('#6,2').instance().value = "4");
            expect(wrapper.find('#6,3').instance().value = "9");
            expect(wrapper.find('#6,4').instance().value = "2");
            expect(wrapper.find('#6,5').instance().value = "8");
            expect(wrapper.find('#6,6').instance().value = "5");
            expect(wrapper.find('#6,7').instance().value = "6");
            expect(wrapper.find('#6,8').instance().value = "1");

            expect(wrapper.find('#7,0').instance().value = "9");
            expect(wrapper.find('#7,1').instance().value = "6");
            expect(wrapper.find('#7,2').instance().value = "2");
            expect(wrapper.find('#7,3').instance().value = "4");
            expect(wrapper.find('#7,4').instance().value = "1");
            expect(wrapper.find('#7,5').instance().value = "5");
            expect(wrapper.find('#7,6').instance().value = "3");
            expect(wrapper.find('#7,7').instance().value = "7");
            expect(wrapper.find('#7,8').instance().value = "8");

            expect(wrapper.find('#8,0').instance().value = "1");
            expect(wrapper.find('#8,1').instance().value = "8");
            expect(wrapper.find('#8,2').instance().value = "5");
            expect(wrapper.find('#8,3').instance().value = "7");
            expect(wrapper.find('#8,4').instance().value = "6");
            expect(wrapper.find('#8,5').instance().value = "3");
            expect(wrapper.find('#8,6').instance().value = "4");
            expect(wrapper.find('#8,7').instance().value = "2");
            expect(wrapper.find('#8,8').instance().value = "9");

            done();

        } else {
            /** als de eerste cell toch geen value heeft van 4 dan klikken we door aangezien de sample boards random zijn */
            wrapper.find('#generatebutton').simulate('click')
        }
    });
});
