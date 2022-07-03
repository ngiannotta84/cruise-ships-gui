class Port {
    constructor (name) {
        this.name = name;
        this.ships = [];
    };

    addShip(ship){
        this.ships.push(ship);
    }
    removeShip(ship){
    const removedShip = this.ships.filter(items => items!== ship);
    this.ships = removedShip    
    }
};

module.exports = Port;
