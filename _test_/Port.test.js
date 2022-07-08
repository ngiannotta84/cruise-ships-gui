/* globals describe it expects*/
const Port = require ('../src/Port.js');
describe ("Port",() => {
    describe ('with ports',() => {
        let port;
        beforeEach (() => {
            port = new Port ("Brighton")
        });
it('can be instantiated',() => {
expect(new Port()).toBeInstanceOf(Object)});
it("give a name to the Port",() => {
expect(port.name).toEqual ("Brighton")
});
it ("can add ship",()=>{
    const ship ={};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
    });
it('can remove a ship',() => {
        const titanic ={};
        const queenMary={};
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);
        });
    })
});