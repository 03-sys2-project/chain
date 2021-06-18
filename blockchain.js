const Block = require("./block");


class Blockchain{

    constructor(){
        this.chain = [Block.genesis()];  // Am Anfang war ...
    }

    addBlock(){
        const block = "testBlock";
        this.chain.push(block);
        return block;
    }








} // EoC

module.exports = Blockchain;