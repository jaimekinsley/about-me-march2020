// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../is-yes.js';


const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const result = isYes('yes');
    const result2 = isYes('y');
    const result3 = isYes('no');


    //Act 
    // Call the function you're testing and set the result to a const



    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, true);
    assert.equal(result2, true);
    assert.equal(result3, false);

});
