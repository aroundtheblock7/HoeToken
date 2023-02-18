const { ethers, run, network } = require("hardhat")

async function main() {
  const chainId = network.config.chainId;

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  const Token = await ethers.getContractFactory("HoeToken");

  //const args = [];
  
  console.log(`Deploying...`);
  const token = await Token.deploy();
  await token.deployed();
  console.log(`Deployed!`);
  console.log("HoeToken address:", token.address);


  // * only verify on testnets or mainnets.
  if (chainId != 31337 && process.env.ETHERSCAN_KEY) {
    console.log(`Waiting for blocks confirmations...`);
    await token.deployTransaction.wait(6);
    console.log(`Confirmed!`);
    //await verify(token.address, args);
  }
     
  await hre.run("verify:verify", {
    address: token.address,
    contract: "contracts/HoeToken.sol:HoeToken", 
    constructorArguments: [],
 });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});