const { ethers } = require("ethers");

// Generate a random wallet
const wallet = ethers.Wallet.createRandom();

console.log("Private Key:", wallet.privateKey); // The private key
console.log("Public Address:", wallet.address); // The public Ethereum address
