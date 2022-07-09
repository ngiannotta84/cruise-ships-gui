/* globals describe it expects*/
const Ship = require ('../src/Ship.js');
const Itinerary = require ('../src/Itinerary.js')
describe ('Ship',() => {
    describe ('with ports and an itinerary',() => {
        let ship;
        let dover;
        let calais;
        let itinerary;
        beforeEach(() => {
            dover = {removeShip:jest.fn(),
            addShip:jest.fn()};
            calais = {addShip:jest.fn()};
            itinerary = new Itinerary ([dover,calais]);
            ship = new Ship (itinerary);
        });
        it ('can be instantiated',()=> {
            expect(ship).toBeInstanceOf(Object);
        });
        it ('has a starting port',()=>{
            expect(ship.currentPort).toBe(dover);
        });
        it ('can set sail',() =>{
            ship.setSail();
            expect(dover.removeShip).toHaveBeenCalled();
            expect(ship.currentPort).toBeFalsy();
            
        });
        it ('gets added to port on instantiation',()=>{
            expect(dover.addShip).toHaveBeenCalled();
        });
        it ('can\'t set sail further than its itinerary',()=>{
            ship.setSail();
            ship.dock();
            expect (() => ship.setSail()).toThrowError('End of itinerary reached');
        });
        it ('can dock at different ports',()=>{
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(calais);
            expect (calais.addShip).toHaveBeenCalled();
            })
    });
});

