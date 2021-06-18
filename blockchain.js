const Block = require("./block");


class Blockchain{

    constructor(){
        this.chain = [Block.genesis()];  // Am Anfang war ...
    }

    addBlock(data){
        const block = Block.mineBlock(this.chain[this.chain.length-1],data);
        this.chain.push(block);
        return block;
    }








} // EoC

module.exports = Blockchain;