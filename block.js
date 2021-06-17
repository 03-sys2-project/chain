
// Klasse Block
class Block{

    // Konstruktor + Parameter
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){ // für Debugging-Zwecke, Inhalt des Obj.
        return ` Block -
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0,10)}
            Hash:      ${this.hash.substring(0,10)}
            Data:      ${this.data}`;
    }

    static genesis(){
        return new this("Genesis time", "------","abc1234",[]);
    }



} // EoC

module.exports = Block; // Export als Modul

