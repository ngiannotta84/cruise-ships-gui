class Ship {
    constructor (currentPort){
        this.currentPort = currentPort;
        this.previousPort=null;
    };
    setSail() {
        this.previousPort = this.currentPort;  
        this.currentPort = null;
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