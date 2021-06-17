
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

    static genesis(){ // 1. Block
        return new this("Genesis time", "------","abc1234",[]);
    }

   
    static mineBlock(lastBlock,data){  // Block 2..n etc.
        const timestamp = Date.now(); // Zeit im ms seit 01.01.1970  || How soon is now?
        const lastHash = lastBlock.hash;
        const hash = "HASH toDo";
        return new this(timestamp,lastHash,hash,data);
    }

} // EoC

module.exports = Block; // Export als Modul

