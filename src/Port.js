class Port {
    constructor (name) {
        this.name = name;
        this.ships = [];
    };

    addShip(ship){
    this.ships.push(ship);
    }
    removeShip(ship){
    this.ships = this.ships.filter(items => items!== ship);  
    }
};

module.exports = Port;
