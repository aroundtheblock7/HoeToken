require('@nomicfoundation/hardhat-toolbox')
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: "ETHERSCAN_KEY"
  },
}