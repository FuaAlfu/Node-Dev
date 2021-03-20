import * as crypto from 'crypto';

class Transaction {
    constructor(
        public amount: number,
        public payer: string,
        public payee: string
    ){}

    toString(){
        return json.stringify(this);
    }
}

class Block {}

class Chain {}

class Wallet {}