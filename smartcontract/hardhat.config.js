require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: ".env" });

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

console.log(`Loaded Private Key: ${PRIVATE_KEY}`);
console.log(`Loaded INFURA API Key: ${INFURA_API_KEY}`);
console.log(`Loaded ETHERSCAN key: ${ETHERSCAN_KEY}`);

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};
