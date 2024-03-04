# web3utility

A simple JavaScript package for creating and managing a basic blockchain.

## Installation

You can install this package via npm:

```
npm install web3utility
```

## Usage

```javascript
const Blockchain = require('web3utility');

// Create a new instance of the blockchain
const blockchain = new Blockchain();

// Create a new transaction
const transactionId = blockchain.createNewTransaction('sender_address', 'recipient_address', 100);

// Create a new block
const previousBlock = blockchain.getLastBlock();
const previousBlockHash = previousBlock.hash;
const nonce = 100; // For demonstration, in real-world scenarios, this would be calculated
const newBlock = blockchain.createNewBlock(nonce, previousBlockHash);

console.log('Blockchain:', blockchain.chain);
```

## API

### `Blockchain`

#### `constructor()`

Creates a new instance of the Blockchain class.

#### `createNewBlock(nonce, previousBlockHash)`

Creates a new block in the blockchain.

- `nonce` (number): The nonce for the new block.
- `previousBlockHash` (string): The hash of the previous block.

#### `getLastBlock()`

Returns the last block in the blockchain.

#### `createNewTransaction(sender, recipient, amount)`

Creates a new transaction.

- `sender` (string): The address of the sender.
- `recipient` (string): The address of the recipient.
- `amount` (number): The amount to be transferred.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
