/* globals describe it expects*/
const Port = require ('../src/Port.js');
describe ("Port",() => {
it('can be instantiated',() => {
expect(new Port()).toBeInstanceOf(Object)});
it("give a name to the Port",() => {
const port = new Port("Brighton");
expect(port.name).toEqual ("Brighton")
})
});

describe ("addShip",() => {
it ("can add ship",()=>{
const port = new Port ('Dover');
const ship ={};
port.addShip(ship);
expect(port.ships).toContain(ship);
})
});
describe ("removeShip",()=>{
    it('can remove a ship',() => {
        const port =new Port('Dover');
        const titanic ={};
        const queenMary={};
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);

    })
})