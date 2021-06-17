const Block = require("./block");

// const block = new Block("time","hash1","hash2","data");
// console.log(block.toString());

// console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),"testDaten");
console.log(testBlock.toString());

