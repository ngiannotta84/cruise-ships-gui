class Ship {
    constructor (portname){
        this.currentPort =portname;
    };
    setSail() {
        this.currentPort = "" ;
    }
    dock(port){
        this.currentPort = port ;
    }
};

        
    // const hasstartingPort = this.startingPort;

    // if (hasstartingPort) {this.startingPort=false }
    // else {this.startingPort=true }
    //     }; 
    // } 


module.exports = Ship;