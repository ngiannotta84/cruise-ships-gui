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