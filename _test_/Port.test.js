/* globals describe it expects*/
const Port = require ('../src/Port.js');
describe ("Port",() => {
    describe ('with ports',() => {
        let port;
        let ship;
        beforeEach (() => {
            port = new Port ("Brighton")
            ship = {};
        });
it('can be instantiated',() => {
expect(new Port()).toBeInstanceOf(Object)});
it("give a name to the Port",() => {
expect(port.name).toEqual ("Brighton")
});
it ("can add ship",()=>{
    port.addShip(ship);
    expect(port.ships).toContain(ship);
    });
it('can remove a ship',() => {
        const titanic ={};
        port.addShip(titanic);
        port.addShip(ship);
        port.removeShip(ship);
        expect(port.ships).toEqual([titanic]);
        });
    })
});