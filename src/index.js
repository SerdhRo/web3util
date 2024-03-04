// blockchain-utils.js

class Blockchain {
  constructor() {
    this.chain = [];
    this.currentTransactions = [];
    this.createNewBlock(100, '0'); // Genesis block
  }

  createNewBlock(nonce, previousBlockHash) {
    const newBlock = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.currentTransactions,
      nonce: nonce,
      previousBlockHash: previousBlockHash,
    };

    this.currentTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  createNewTransaction(sender, recipient, amount) {
    this.currentTransactions.push({
      sender: sender,
      recipient: recipient,
      amount: amount,
    });

    return this.getLastBlock()['index'] + 1;
  }
}
