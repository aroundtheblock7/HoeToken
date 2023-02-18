require('@nomicfoundation/hardhat-toolbox')
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  solidity: '0.8.17',
  networks: {
    hardhat: {
      chainId: 31337,
  },
    localhost: {
      chainId: 31337,
  },
    goerli: {
      chainId: 5,
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      saveDeployments: true,
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
}