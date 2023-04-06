const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify.js");
const {
  networkConfig,
  developmentChains,
} = require("../hardhat-helper-config.js");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const chainId = network.config.chainId;
  const { deployer } = await getNamedAccounts();

  const initialSupply = networkConfig[chainId]["initialSupply"];
  const args = [initialSupply];

  const Token = await deploy("OurToken", {
    from: deployer,
    args: args,
    log: true,
  });
  console.log(network.name);
  if (!developmentChains.includes(network.name)) {
    log("Verifying...");
    await verify(Token.address, args);
  }
};

module.exports.tags = ["all", "Token"];
