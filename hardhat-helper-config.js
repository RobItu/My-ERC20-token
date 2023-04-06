const { ethers } = require("hardhat");

const networkConfig = {
  31337: {
    name: "hardhat",
    chainId: 31337,
    initialSupply: ethers.utils.parseEther("10"),
  },

  5: {
    name: "goerli",
    initialSupply: ethers.utils.parseEther("10"),
  },
};

const developmentChains = ["hardhat", "localhost", 31337];

module.exports = {
  developmentChains,
  networkConfig,
};
