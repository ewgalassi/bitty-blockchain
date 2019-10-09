// const SHA256 = require("crypto-js/sha256"); 

class Block { 
  constructor(index, timestamp, data, previousHash = "") { 
    this.index = index; 
    this.previousHash = previousHash; 
    this.timestamp = timestamp; 
    this.data = data; 
    this.hash = this.calculateHash(); 
  }
  calculateHash() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
    // return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString(); 
  } 
};

class Blockchain {
  //Section 1: Genesis block creation
  constructor() { 
    this.chain = [this.createGenesisBlock()]; 
  } 
  createGenesisBlock() {
    return new Block(0, "09:25 10/07/2019", "Genesis block", "0"); 
  } 
  
  //section 2: adding new blocks
  getLatestBlock() { 
    return this.chain[this.chain.length - 1]; 
  } 
  addBlock(newBlock) { 
    newBlock.previousHash = this.getLatestBlock().hash; 
    newBlock.hash = newBlock.calculateHash(); 
    this.chain.push(newBlock); 
  } 

  //section 3: validating the chain
  isChainValid() { 
    for (let i = 1; i < this.chain.length; i++) { 
      const currentBlock = this.chain[i]; 
      const previousBlock = this.chain[i - 1]; 
      if (currentBlock.hash !== currentBlock.calculateHash()) { 
        return false; 
      } 
      if (currentBlock.previousHash !== previousBlock.hash) { 
        return false; 
      } 
    } 
    return true; 
  } 
};

let Blockmx = new Blockchain();

Blockmx.addBlock(new Block(1, "09:26 10/07/2019", { clocks: 150 }));

Blockmx.addBlock(new Block(2, "09:27 10/07/2019", { clocks: 200 }));