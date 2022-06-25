/* globals describe it expects*/
const Port = require ('../src/Port.js');
describe ("Port",() => {
it('can be instantiated',() => {
expect(new Port()).toBeInstanceOf(Object)});
it("give a name to the Port",() => {
const namePort = new Port("Brighton");
expect(namePort.name).toEqual ("Brighton")
})
});