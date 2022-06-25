/* globals describe it expects*/
const Ship = require ('../src/Ship.js');
describe ('Ship',() => {
    it ('can be instantiated',()=> {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it ('sets the name of the property',() => {
        const ship = new Ship ("ship");
        expect (ship.name).toBe("ship");
    });
    it ('has a startingport',()=>{
        const ship = new Ship("ship","Dover");
        expect(ship.startingPort).toBe("Dover");
    });
});